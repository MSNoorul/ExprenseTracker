import { useState } from "react";
import { useAppContext } from "../context/Appcontext";

function Form() {

    const [value, setValue] = useState('');
    const {dispatch} = useAppContext()

    const handleChange =(event)=> {
      const currentValue = event.target.value;
      const regex = /^[0-9]*$/;
      if (regex.test(currentValue)) {
        setValue(currentValue);
      }
    }
    const handleAddExpense = (type) => {
      if(!value) return
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
      dispatch({
        type: type,
        payload: { amount: parseFloat(value), date, time }
      });
      setValue('');
    }
    return ( 
        <div className="text-center">
        <form >
            <input type="text" name="value"   value={value} onChange={handleChange} 
            className="  shadow-[inset_0px_2px_4px_rgba(0,0,0,0.5)] focus:outline-none border-solid rounded-md border-slate-600 font-medium text-xl p-2 my-3"/>
        </form>
        <div className=" mt-3">
            <button onClick={()=>handleAddExpense('ADD')} className="btn bg-red-600 px-4 py-2 rounded text-white font-medium">Add</button>
            <button onClick={()=>handleAddExpense('REMOVE')} className="btn bg-green-600 ml-2 px-4 py-2 rounded text-white font-medium">Remove</button>
        </div>
        </div>
        
     );
}

export default Form;