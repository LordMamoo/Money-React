export default function Balance() {
    let income = (0).toFixed(2);
    let expense = (0).toFixed(2);
    let balance = (0).toFixed(2)

    function findBalance() {
        balance = income - expense;
    }

    findBalance();

    return (
        <div id="balance" className='flex flex-col justify-center items-center gap-2 p-4 bg-blue-500 w-2xl h-60 text-white'>
            <h1 className="text-xl w-lg">Money Manager</h1>
            <div className="w-lg">
                <h2>Your Balance</h2>
                <span>${balance}</span>
            </div>
            <div className="flex gap-4 p-8 w-lg bg-white rounded-lg text-black">
                <span>Income: ${income}</span>
                <span>Expense: ${expense}</span>
            </div>
        </div>
    )
}