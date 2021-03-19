import { Console } from "console";
import { ChangeEvent, useState } from "react"

export const Formulario = () => {

    const [formulario, setFormulario] = useState ({
        postal: "",
        ciudad:""
    }) ;
const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
const {name, value} = target;

setFormulario ({

    ...formulario,
    [ name ]: value
});

}

return(
    
    <form autoComplete ="off">

    <div className= "mb-3">
     <label className="form-label">Codigo Postal</label>
     <input type="tex"
     className="form-control"
     name="postal"
     onChange={handleChange}
     />
    

</div>

<form autoComplete ="off">

<div className= "mb-3">
 <label className="form-label">Ciudad</label>
 <input type="tex"
 className="form-control"
 name="Ciudad"
 onChange={handleChange}
 />


</div>
<pre>{JSON.stringify(Formulario)}</pre>
    </form>
    

)

}