
import { useAppContext } from "../context/Appcontext";

function Balance() {
    const {balance} = useAppContext();
    
    return ( 
        <div className="flex justify-center">
            <h3 className=" font-serif font-medium capitalize">your balance:</h3>
            <p className=" pl-2 font-bold"><span>&#8377;</span> {balance}</p>
        </div>
     );
}

export default Balance;