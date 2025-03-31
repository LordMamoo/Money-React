import { useState } from 'react'
import Balance from "./components/Balance.jsx";
import History from "./components/History.jsx";
import Transaction from "./components/Transaction.jsx"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className='min-h-dvh w-dvw flex flex-col items-center gap-4 p-20'>
          <Balance />
          <History />
          <Transaction />
      </main>
    </>
  );
}

export default App