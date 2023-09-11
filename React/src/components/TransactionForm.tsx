// TransactionForm.js
import { useState, ChangeEvent, FormEvent } from "react";
import api from "../api/api";

function TransactionForm({ fetchTransaction }: any) {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    description: "",
    is_income: false,
    date: "",
  });

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

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
            <button
              type="submit"
              className="w-full px-2 py-3 bg-blue-500 text-center mt-4"
            >
              Submit
            </button>
          </form>
    </div>
  );
}

export default TransactionForm;
