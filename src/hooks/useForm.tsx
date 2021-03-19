import { ChangeEvent, useState } from "react";



export const useForm =( initState: any ) => {


export const Formulario = () => {


    const [formulario, setFormulario] = useState(initState);

const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
const {name, value} = target;

setFormulario ({

    ...formulario,
    [ name ]: value
  });
}
           return {
         formulario,
         handleChange

        
        
        
        }
    
    
}