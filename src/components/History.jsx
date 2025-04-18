import { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import Balance from "./Balance";

export default function History() {
    const [transactions, setTransactions] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false); // ✅ flag

    // Load from localStorage on first render
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("transactions")) || [];
        const normalized = saved.map((t) => ({
            ...t,
            amount: Number(t.amount),
        }));
        setTransactions(normalized);
        setHasLoaded(true); // ✅ mark as loaded
    }, []);

    // Save only after the first load has completed
    useEffect(() => {
        if (hasLoaded) {
            localStorage.setItem("transactions", JSON.stringify(transactions));
        }
    }, [transactions, hasLoaded]);

    const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    return (
        <div className="p-4">
            <Balance income={income} expense={expense} />
            <TransactionForm
                transactions={transactions}
                setTransactions={setTransactions}
            />
            <TransactionList transactions={transactions} />
        </div>
    );
}