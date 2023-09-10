import "./App.css";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import api from "./api/api";

interface Transaction {
  // Define the type for a transaction item
  id: number;
  amount: number;
  category: string;
  description: string;
  is_income: boolean;
  date: string;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]); // An array of transactions
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    description: "",
    is_income: false,
    date: "",
  });

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

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    const newValue =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleFormSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    await api.post("/addtransaction/", formData);
    fetchTransaction();
    setFormData({
      amount: "",
      category: "",
      description: "",
      is_income: false,
      date: "",
    });
  };

  return (
    <>
      <div className="w-full">
        <nav className="flex flex-row justify-between items-center px-6 py-5 border-b border-slate-400">
          <div id="logo">Finance App</div>
        </nav>
        <div className="flex flex-col justify-center items-center mt-16">
          <form onSubmit={handleFormSubmit}>
            <div className="w-full">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                id="amount"
                name="amount"
                onChange={handleInputChange}
                value={formData.amount}
                className="w-full p-3 mt-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                name="category"
                onChange={handleInputChange}
                value={formData.category}
                className="w-full p-3 mt-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="description">description</label>
              <input
                type="text"
                id="description"
                name="description"
                onChange={handleInputChange}
                value={formData.description}
                className="w-full p-3 mt-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="is_income">Income ?</label>
              <input
                type="checkbox"
                id="is_income"
                name="is_income"
                onChange={handleInputChange}
                checked={formData.is_income}
                className="w-full p-3 mt-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="date">date</label>
              <input
                type="text"
                id="date"
                name="date"
                onChange={handleInputChange}
                value={formData.date}
                className="w-full p-3 mt-2"
              />
            </div>
            <button type="submit" className="w-full px-2 py-3 bg-blue-500 text-center mt-4">
              Submit
            </button>
          </form>
          <table className="min-w-full mt-10 divide-y divide-gray-700 dark:bg-gray-800">
  <thead className="bg-gray-600 dark:bg-gray-700">
    <tr>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
      >
        Amount
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
      >
        Category
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
      >
        Description
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
      >
        Income
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
      >
        Date
      </th>
    </tr>
  </thead>
  <tbody className="bg-gray-700 dark:bg-gray-800 divide-y divide-gray-600 dark:divide-gray-700">
    {transactions.map((tran) => (
      <tr key={tran.id}>
        <td className="px-6 py-4 whitespace-nowrap text-gray-200 dark:text-white">{tran.amount}</td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-200 dark:text-white">{tran.category}</td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-200 dark:text-white">{tran.description}</td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-200 dark:text-white">
          {tran.is_income ? (
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 dark:bg-green-300 text-green-100 dark:text-green-800">
              Yes
            </span>
          ) : (
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 dark:bg-red-300 text-red-100 dark:text-red-800">
              No
            </span>
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-200 dark:text-white">{tran.date}</td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </>
  );
}

export default App;
