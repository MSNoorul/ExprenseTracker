import Balance from "./components/balance"
import Form from "./components/form"
import History from "./components/history"


function App() {

  return (
    <div className="App p-9  ">
      <h2 className=' text-2xl text-center m-2 font-semibold'>Exprense Tracker</h2>
      <section className="mx-auto  p-4 sm:w-[600px]  border
       border-slate-700 rounded-md">
      <div>
        <Balance/>
        <Form/>
      </div>

      </section>
      <section className="mx-auto mt-5 p-4 sm:w-[600px]  border
       border-slate-700 rounded-md">
      <History/>
      </section>
      
    
    </div>
  )
}

export default App
