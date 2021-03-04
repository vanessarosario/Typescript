import { useState } from "react"
import { setConstantValue } from "typescript";


export const Counter = () => {
   const [Counter, setCounter] = useState(0);
   
   const incrementar = (numero: number ) : void => {
   setCounter( Counter + numero); 

   }
    
    
    
    return (
        <div className="mt-5">
           <h3>Counter: useState</h3>
           <span>valor: {Counter} </span>
           <br/>
           <button 
              onClick={ () => incrementar(1)}
              className="btn btn-outline-primary mt-2">
               +1
           </button>
           
           <button 
           onClick={() =>incrementar(2)}
           className="btn btn-outline-primary mt-2">
           
               +2
           </button>

             <button 
             onClick={() => setCounter (2)}
             className="btn btn-outline-danger mt-2">
             Reset
               
           </button>
        </div>
    )
}