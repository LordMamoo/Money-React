import { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function History() {
    const [transactions, setTransactions] = useState([]);

    // Load from localStorage when component mounts
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("transactions")) || [];
        setTransactions(saved);
    }, []);

    // Save to localStorage when transactions change
    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    return (
        <div className="p-4">
            <TransactionForm
                transactions={transactions}
                setTransactions={setTransactions}
            />
            <TransactionList transactions={transactions} />
        </div>
    );
}