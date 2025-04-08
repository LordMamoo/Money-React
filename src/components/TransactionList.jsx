// TransactionList.jsx
export default function TransactionList({ transactions }) {
    if (transactions.length === 0) {
        return <p className="text-gray-500 mt-4">No transactions yet.</p>;
    }

    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold">History</h2>
            <ul className="mt-2">
                {transactions.map((t) => (
                    <li
                        key={t.id}
                        className="p-2 bg-gray-100 my-1 rounded flex justify-between items-center"
                    >
                        <span className="capitalize">{t.type} ({t.text})</span>
                        <span className={t.type === "income" ? "text-green-600" : "text-red-600"}>
                            ${t.amount.toFixed(2)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
