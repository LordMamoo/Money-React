export default function Navbar() {
    return (
        <div className="flex justify-between items-center w-full p-5 text-white bg-blue-600">
            <h1 className="text-2xl">Money Manager 2.0</h1>
            <div className="flex justify-between gap-2">
                <span>History</span>
                <span>Profile</span>
            </div>
        </div>
    )
}