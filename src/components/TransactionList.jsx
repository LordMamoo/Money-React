export default function TransactionList({ transactions, deleteTransaction }) {
    if (transactions.length === 0) {
        return <p className="text-gray-500 mt-4">No transactions yet.</p>;
    }

    return (
        <div className="mt-4 w-xl">
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
                        <button 
                            onClick={() => deleteTransaction(t.id)} 
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}