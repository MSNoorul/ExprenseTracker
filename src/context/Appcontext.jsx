import { createContext, useContext, useReducer,useEffect,useLayoutEffect } from "react";
import Reducer from "./reducer";

const appcontext = createContext()
export function useAppContext(){
    return useContext(appcontext)
}

function AppcontextProvider({children}) {
    const [state, dispatch] = useReducer(Reducer, { history: [], balance: 0 });
    const {history , balance} = state;
    
  useEffect(() => {
    const storedState = localStorage.getItem("appState");
    if (storedState) {
      dispatch({ type: "SET_STATES", state: JSON.parse(storedState)});
    }
  }, []);

    useEffect(() => {
        const newBalance = history.reduce((total, obj) => {
            if (obj.type === 'ADD') {
                return total + obj.amount;
            } else {
                return total - obj.amount;
            }
        }, 0);
        dispatch({ type: 'UPDATE_BALANCE', balance: newBalance });
    }, [history]);
     
    return (
        <appcontext.Provider value={{history,dispatch,balance}}>
            {children}
        </appcontext.Provider> );
    }
    
export default AppcontextProvider;