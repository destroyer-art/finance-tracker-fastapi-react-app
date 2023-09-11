import "./App.css";
import { useState, useEffect } from "react";
import api from "./api/api";
import ConfirmationDialog from "./components/ConfirmationDialog";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";

interface Transaction {
  id: number;
  amount: number;
  category: string;
  description: string;
  is_income: boolean;
  date: string;
  onDelete: () => void;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]); // An array of transactions

  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState<number | null>(
    null
  );

  const fetchTransaction = async () => {
    try {
      const response = await api.get<Transaction[]>("/gettransaction/"); // Specify the response data type
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  const handleDeleteTransaction = (transactionId: number) => {
    setConfirmationVisible(true);
    setTransactionToDelete(transactionId);
  };

  const confirmDelete = async () => {
    if (transactionToDelete !== null) {
      try {
        await api.delete(`/deletetransaction/${transactionToDelete}`);
        fetchTransaction();
      } catch (error) {
        console.error(
          `Error deleting transaction ${transactionToDelete}:`,
          error
        );
      } finally {
        setConfirmationVisible(false);
        setTransactionToDelete(null);
      }
    }
  };

  const cancelDelete = () => {
    setConfirmationVisible(false);
    setTransactionToDelete(null);
  };

  return (
    <>
      <div className="w-full">
        <nav className="flex flex-row justify-between items-center px-6 py-5 border-b border-slate-400">
          <div id="logo">Finance App</div>
        </nav>
        {/* Separate TransactionForm component */}
        <TransactionForm fetchTransaction={fetchTransaction} />
        {/* Separate TransactionTable component */}
        <TransactionTable
          transactions={transactions}
          handleDeleteTransaction={handleDeleteTransaction}
        />
      </div>
      <ConfirmationDialog
        visible={confirmationVisible}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </>
  );
}

export default App;
