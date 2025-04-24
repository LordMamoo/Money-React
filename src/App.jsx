import History from "./components/History.jsx";
import Navbar from "./components/NavBar.jsx"

function App() {
  return (
    <>
      <main className='min-h-dvh w-auto flex flex-col items-center overflow-hidden'>
          <Navbar />
          <History />
      </main>
    </>
  );
}

export default App