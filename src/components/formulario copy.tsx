
import { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm";

export const Formulario = () => {

    const { formulario, handleChange} = useForm({
        email:"",
        nombre:""
    });



//    const [formulario, setFormulario] = useState ({
//        email: "",
//      nombre:""
      
//}) 
//const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
//const {name, value} = target;

//setFormulario ({

//...formulario,
//[ name ]: value
//});

}

return(
    
    <form autoComplete ="off">

    <div className= "mb-3">
     <label className="form-label">Email</label>
     <input type="tex"
     className="form-control"
     name ="email"
     value ={Formulario.value}
     onChange={handleChange}
     />
    

</div>

<form autoComplete ="off">

<div className= "mb-3">
 <label className="form-label">Nombre</label>
 <input type="tex"
 className="form-control"
 name="nombre"
 onChange={handleChange}
 />


</div>
<pre>{JSON.stringify(Formulario)}</pre>
    </form>
    

)

}