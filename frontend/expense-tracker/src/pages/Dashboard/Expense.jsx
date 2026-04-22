import React, { useEffect, useState } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { API_PATHS } from "../../utils/apiPaths";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/axiosInstance";
import ExpenseOverview from "../../components/Expense/ExpenseOverview";
import AddExpenseForm from "../../components/Expense/AddExpenseForm";
import EditExpenseForm from "../../components/Expense/EditExpenseForm";
import Modal from "../../components/Modal";
import ExpenseList from "../../components/Expense/ExpenseList";
import DeleteAlert from "../../components/DeleteAlert";

const Expense = () => {
  useUserAuth();

  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({ show: false, data: null });
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
  const [openEditExpenseModal, setOpenEditExpenseModal] = useState({ show: false, data: null });

  const fetchExpenseDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.EXPENSE.GET_ALL_EXPENSE);
      if (response.data) {
        const cleanData = response.data.filter(item =>
          item && item.category?.trim() && item.amount &&
          !isNaN(Number(item.amount)) && item.date
        );
        setExpenseData(cleanData);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (expense) => {
    const { category, amount, date, icon } = expense;
    if (!category.trim()) { toast.error("Category is required."); return; }
    if (!amount || isNaN(amount) || Number(amount) <= 0) { toast.error("Amount should be a valid number greater than 0."); return; }
    if (!date) { toast.error("Date is required."); return; }

    try {
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, { category, amount, date, icon });
      setOpenAddExpenseModal(false);
      toast.success("Expense added successfully");
      fetchExpenseDetails();
    } catch (error) {
      console.error("Error adding expense:", error.response?.data?.message || error.message);
    }
  };

  const handleUpdateExpense = async (updatedData) => {
    const { category, amount, date, icon } = updatedData;
    if (!category.trim()) { toast.error("Category is required."); return; }
    if (!amount || isNaN(amount) || Number(amount) <= 0) { toast.error("Amount should be a valid number greater than 0."); return; }
    if (!date) { toast.error("Date is required."); return; }

    try {
      await axiosInstance.put(API_PATHS.EXPENSE.UPDATE_EXPENSE(openEditExpenseModal.data._id), {
        category, amount, date, icon,
      });
      setOpenEditExpenseModal({ show: false, data: null });
      toast.success("Expense updated successfully");
      fetchExpenseDetails();
    } catch (error) {
      console.error("Error updating expense:", error.response?.data?.message || error.message);
      toast.error("Failed to update expense.");
    }
  };

  const handleDeleteExpense = async (id) => {
    if (!id) return;
    try {
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));
      toast.success("Expense deleted successfully.");
      fetchExpenseDetails();
    } catch (error) {
      console.error("Delete error:", error.response?.data || error.message);
      toast.error("Failed to delete expense.");
    } finally {
      setOpenDeleteAlert({ show: false, data: null });
    }
  };

  const handleDownloadExpenseDetails = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.EXPENSE.DOWNLOAD_EXPENSE, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "expense_details.xlsx");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("Download successful.");
    } catch (error) {
      toast.error("Failed to download file.");
    }
  };

  useEffect(() => {
    fetchExpenseDetails();
    return () => { };
  }, []);

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <ExpenseOverview
            transactions={expenseData}
            onExpenseIncome={() => setOpenAddExpenseModal(true)}
          />

          <ExpenseList
            transactions={expenseData}
            onDelete={({ id }) => setOpenDeleteAlert({ show: true, data: id })}
            onEdit={(expense) => setOpenEditExpenseModal({ show: true, data: expense })}
            onDownload={handleDownloadExpenseDetails}
          />
        </div>

        <Modal isOpen={openAddExpenseModal} onClose={() => setOpenAddExpenseModal(false)} title="Add Expense">
          <AddExpenseForm onAddExpense={handleAddExpense} />
        </Modal>

        <Modal isOpen={openEditExpenseModal.show} onClose={() => setOpenEditExpenseModal({ show: false, data: null })} title="Edit Expense">
          <EditExpenseForm expense={openEditExpenseModal.data} onUpdateExpense={handleUpdateExpense} />
        </Modal>

        <Modal isOpen={openDeleteAlert.show} onClose={() => setOpenDeleteAlert({ show: false, data: null })} title="Delete Expense">
          <DeleteAlert
            content="Are you sure you want to delete this expense detail?"
            onDelete={() => handleDeleteExpense(openDeleteAlert.data)}
          />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Expense;
