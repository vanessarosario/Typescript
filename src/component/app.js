import React, { useState } from "react"
import { BotonCambiarData } from "./BotonCambiarData"
import { dataprovider } from "./context/dataContext"
import { Pagina1 } from "./pagina1"
import { Pagina2 } from "./pagina2"

const dataFixed = {
    nombre: "Vanessa",
    edad:18
}

function app(){

    const [data, setdata] = useState(dataFixed)


    return(
        <dataprovider>
    <div className="container">
     
     <Pagina1 data={data}/>
     <Pagina2 data={data} setdata={setdata}/>
     <BotonCambiarData setdata={setdata}/>


    </div>
    </dataprovider>
);
}


export default app;