import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddExpenseForm = ({ onAddExpense }) => {
    const [income, setIncome] = useState({
        category: "",
        amount: "",
        date: "",
        icon: "",
    });

    const handleChange = (key, value) => setIncome({ ...income, [key]: value });

    return (
        <div>
            <div className="mb-4">
                <EmojiPickerPopup
                    icon={income.icon}
                    onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 text-white">Category</label>
                <Input
                    value={income.category}
                    onChange={({ target }) => handleChange("category", target.value)}
                    placeholder="Rent, Groceries, etc"
                    type="text"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 text-white">Amount</label>
                <Input
                    value={income.amount}
                    onChange={({ target }) => handleChange("amount", target.value)}
                    placeholder=""
                    type="number"
                />
            </div>

            <div className="mb-6">
                <label className="block mb-1 text-white">Date</label>
                <Input
                    value={income.date}
                    onChange={({ target }) => handleChange("date", target.value)}
                    placeholder="dd-mm-yyyy"
                    type="date"
                />
            </div>

            <div className="flex justify-end">
                <button
                    type="button"
                    className="add-btn add-btn-fill"
                    onClick={() => onAddExpense(income)}
                >
                    Add Expense
                </button>
            </div>
        </div>
    );
};

export default AddExpenseForm;
