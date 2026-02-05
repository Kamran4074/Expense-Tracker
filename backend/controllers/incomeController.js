const xlsx = require('xlsx');
const Income = require("../models/income");
const { HTTP_STATUS, ERRORS } = require("../constants");

/**
 * Add a new income record
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with created income or error
 */
exports.addIncome = async (req, res) => {
    const userId=req.user.id;

    try{
        const{icon,source,amount,date}=req.body;

        // Validation: Check for missing fields
        if(!source||!amount||!date){
            return res.status(HTTP_STATUS.BAD_REQUEST).json({message: ERRORS.REQUIRED_FIELDS});
        }

        // Validation: Check for valid amount
        if(amount <= 0){
            return res.status(HTTP_STATUS.BAD_REQUEST).json({message: ERRORS.INVALID_AMOUNT});
        }

        // Validation: Check for valid date
        const inputDate = new Date(date);
        if(isNaN(inputDate.getTime())){
            return res.status(HTTP_STATUS.BAD_REQUEST).json({message: ERRORS.INVALID_DATE});
        }

        const newIncome=new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });

        await newIncome.save();
        res.status(HTTP_STATUS.CREATED).json(newIncome);
    }
    catch(error){
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({message: error.message});
    }
}

/**
 * Get all income records for the authenticated user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with income array or error
 */
exports.getAllIncome = async (req, res) => {
    const userId=req.user.id;

    try{
        const income=await Income.find({userId}).sort({date: -1});
        res.json(income);
    } catch(error){
        res.status(500).json({message: "Server Error"});
    }
};

/**
 * Delete an income record by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with success message or error
 */
exports.deleteIncome = async (req, res) => {
    try{
        const income = await Income.findById(req.params.id);

        if (!income) {
            return res.status(404).json({ message: "Income not found" });
        }

        await income.deleteOne();
        res.json({ message: "Income deleted successfully" });
    }
    catch(error){
        res.status(500).json({message: "Server Error"});
    }
};

/**
 * Download income data as Excel file
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {File} Excel file download or error
 */
exports.downloadIncomeExcel = async (req, res) => {
    const userId=req.user.id;

    try{
        const income=await Income.find({userId}).sort({date: -1});

        // Prepare data for Excel
        const data=income.map((item)=>({
            Source: item.source,
            Amount:item.amount,
            Date: item.date,
        }));

        const wb=xlsx.utils.book_new();
        const ws=xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb,ws,"Income");
        xlsx.writeFile(wb, 'income_details.xlsx');
        res.download('income_details.xlsx');
    }
    catch(error){
        res.status(500).json({message:"Server Error"});
    }
};