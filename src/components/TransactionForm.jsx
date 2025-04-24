import { useState } from "react";

export default function TransactionForm({ transactions = [], setTransactions }) {
    const [formData, setFormData] = useState({
        type: "",
        text: "",
        amount: "",
    });

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    }

    function handleBlur(event) {
        const { id, value } = event.target;

        if (id === "amount") {
            const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));
            if (!isNaN(numericValue)) {
                const formatted = numericValue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                });
                setFormData((prevData) => ({
                    ...prevData,
                    amount: formatted,
                }));
            }
        }
    }

    function addTransaction(e) {
        e.preventDefault();
    
        const numericAmount = parseFloat(formData.amount.replace(/[^0-9.-]+/g, ""));
        if (isNaN(numericAmount)) return;
    
        const signedAmount = formData.type === "expense"
            ? -Math.abs(numericAmount) // always negative
            : Math.abs(numericAmount); // always positive
    
        const newTransaction = {
            ...formData,
            amount: signedAmount,
            id: Date.now(),
        };
    
        const updated = [...transactions, newTransaction];
        setTransactions(updated);
        setFormData({ type: "", text: "", amount: "" });
    }

    return (
        <form onSubmit={addTransaction} className="flex flex-col gap-2 pt-5 w-xl">
            <h2 className="text-xl font-semibold mb-2">Add New Transaction</h2>
            <select id="type" className="rounded bg-gray-100 p-2" value={formData.type} onChange={handleChange} required>
                <option value="">Select Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <input
                id="text"
                type="text"
                placeholder="Description"
                className="rounded bg-gray-100 p-2"
                value={formData.text}
                onChange={handleChange}
            />
            <input
                id="amount"
                type="text"
                placeholder="Amount"
                className="rounded bg-gray-100 p-2"
                value={formData.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                required
            />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
        </form>
    );
}