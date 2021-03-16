
import { type } from "os";
import { useEffect, useRef, useState } from "react";

type TimerArg= {
    milisegudos:number
}

export const Timer = ({milisegudos}: TimerArg) => {

   const [segundos, setsegundos] = useState (0)
   const ref = useRef <NodeJS.Timeout>();

   useEffect ( () => {
       ref.current && clearInterval( ref.current);
       ref.current = setInterval( () => setsegundos (s =>s +1) , 1000);
}, [milisegudos])


    return (
        <>
           <h4>Timer:<small>{segundos}</small></h4>
        </>
    )
    
}
  