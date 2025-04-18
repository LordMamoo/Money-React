// import History from "./History.jsx"

export default function Balance({ income, expense }) {
    const balance = income - expense;

    return (
        <div id="balance" className="flex flex-col justify-center items-center gap-2 p-4 bg-blue-500 rounded-lg w-2xl h-60 text-white">
            <h1 className="text-2xl w-lg">Money Manager</h1>
            <div className="w-lg text-xl">
                <h2>Your Balance</h2>
                <span>${balance.toFixed(2)}</span>
            </div>
            <div className="flex justify-center items-center gap-4 p-8 w-lg bg-white rounded-lg text-black text-xl">
                <span>Income: ${income.toFixed(2)}</span>
                <span>|</span>
                <span>Expense: ${expense.toFixed(2)}</span>
            </div>
        </div>
    );
}