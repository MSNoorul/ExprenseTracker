import { useAppContext } from "../context/Appcontext";

function History() {
    const {history,dispatch,balance} = useAppContext()
    console.log(history);
    return ( 
        <>
        <div className=" flex justify-between">
        <h1 className=" font-semibold">Transaction History:</h1>
        {history.length>0 && <button onClick={()=>dispatch({type:'CLEAR'})} className=" btn bg-red-400 px-4 py-1 text-white">clear</button>}
        </div>
        
        
        <div className=" flex justify-around font-semibold shadow p-2 my-2">
           <p className=" w-24">Date</p>
           <p className=" w-24">Time</p>
           <p className=" w-24">Amount</p>
        </div>
        {history.length?history.map((obj,index)=>{
            return (
                <div key={index} className={`${obj.type == 'ADD'?'border-green-500':'border-red-500'} flex border-l-[5px] justify-around shadow p-2 my-2`}>
           <p className=" w-24">{obj.date}</p>
           <p className=" w-24">{obj.time}</p>
           <p className=" w-24">{obj.amount}</p>
        </div>
            )
        }):''}
        </>
        
       
     );
}

export default History;