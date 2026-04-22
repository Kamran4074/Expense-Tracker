import React, { useState, useEffect } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";
import moment from "moment";

const EditExpenseForm = ({ expense, onUpdateExpense }) => {
    const [formData, setFormData] = useState({
        category: "",
        amount: "",
        date: "",
        icon: "",
    });

    useEffect(() => {
        if (expense) {
            setFormData({
                category: expense.category || "",
                amount: expense.amount || "",
                date: moment(expense.date).format("YYYY-MM-DD"),
                icon: expense.icon || "",
            });
        }
    }, [expense]);

    const handleChange = (key, value) => setFormData({ ...formData, [key]: value });

    return (
        <div>
            <div className="mb-4">
                <EmojiPickerPopup
                    icon={formData.icon}
                    onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 text-white">Category</label>
                <Input
                    value={formData.category}
                    onChange={({ target }) => handleChange("category", target.value)}
                    placeholder="Rent, Groceries, etc"
                    type="text"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 text-white">Amount</label>
                <Input
                    value={formData.amount}
                    onChange={({ target }) => handleChange("amount", target.value)}
                    placeholder=""
                    type="number"
                />
            </div>

            <div className="mb-6">
                <label className="block mb-1 text-white">Date</label>
                <Input
                    value={formData.date}
                    onChange={({ target }) => handleChange("date", target.value)}
                    placeholder="dd-mm-yyyy"
                    type="date"
                />
            </div>

            <div className="flex justify-end">
                <button
                    type="button"
                    className="add-btn add-btn-fill"
                    onClick={() => onUpdateExpense(formData)}
                >
                    Update Expense
                </button>
            </div>
        </div>
    );
};

export default EditExpenseForm;
