import Balance from "./components/Balance.jsx";
import History from "./components/History.jsx";

function App() {
  return (
    <>
      <main className='min-h-dvh w-dvw flex flex-col items-center gap-4 p-20'>
          <Balance />
          <History />
      </main>
    </>
  );
}

export default App  