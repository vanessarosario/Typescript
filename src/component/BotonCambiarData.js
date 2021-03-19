import React from "react"

const data ={
    nombre:"Jesus",
    edad:19
}



export const BotonCambiarData = () => {
 return (
     <div>
         <button className= "btn btn-primary"
         onClick={ () => setdata () }
         >
             Cambiar Data
         </button>
     </div>
 )

}