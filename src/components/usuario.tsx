import { useState } from "react"

interface User {
    uid:string;
    name:String;
}


export const Usuario = () => {
 
const [user, setUser] = useState<User>();
const login=() => {
    setUser ({
        uid:"ABC123",
        name:"Vanessa Rosario"
    });
}

    return(
        <div className = "mt-5">
       <h3>Usuario </h3> 
       <button
       onClick={ login }
       className="btn btn-outline-primary">
        login

       </button>
       {
        (!user)
          ? <pre> No hay usuario </pre>
          : <pre> {JSON.stringify (user)} </pre>
       }
       
        </div>
    )
}