import { useState } from "react";
import {Timer} from "./Timer"; 

export const TimerPadre = () => {

    const [millisegundos, setMillisegundos]=useState(1000); 

    return (
        <>
        <span>Milisegundos{1000}</span>
        <br/>

        <button className="btn btn-outline-success">
           OnClick={() => setMillisegundos(1000)}
           1000
        </button>

        <button className="btn btn-outline-success">
        OnClick={() => setMillisegundos(2000)}
           2000
        </button>




        <Timer millisegundos={millisegundos}/>
        </>
    )
    
}
    
 