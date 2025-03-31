export default function Transaction() {
    function addTransaction() {

    }

    return (
        <div className="w-lg text-left">
            <h1>Add New Transaction</h1>
            <form action="submit" className="flex flex-col gap-2">
                <label htmlFor="type">Text</label>
                <input id="type" type="text" placeholder="Enter Text" className="p-1 bg-blue-300 rounded" />
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="text" placeholder="0.00" className="p-1 bg-blue-300 rounded" />
                <input type="submit" className="p-1 bg-blue-600 rounded text-white" />
            </form>
        </div>
    )
}