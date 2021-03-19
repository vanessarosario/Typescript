import { useReducer } from "react";

const initialState = {
    Contador:0,
}


type ActionType=
{ Type: "incrementar"}
{ Type: "decrementar"}
{ Type: "Custom", payload: number};

const contadorReducer = (state:typeof initialState, action: ActionType) => {
 
    switch(action.Type) {
      case "incrementar":
          return{
              ...state,
              contador: state.Contador + 1

          }

          case "decrementar":
          return{
            ...state,
            contador: state.Contador - 1

        }
        case "custom":
            return{
                ...state,
                contador: action.paylodad
            }
      default:
          break;
    
          
  }  
    
}







export const ContadorRef = () =>{
  const [ contadorState, dispatch ] = useReducer (ContadorReducer, initialState);

  
    return(
  <>
    <h2>Contador: {contadorState.contador}</h2>
    <button className="btn btn-outline-primary"

    onClick={ () => dispatch ({ type: "incrementar" }) }>

     
     +1
    </button>
    <button className="btn btn-outline-primary"

     onClick={ () => dispatch ({ Type: "decrementar" }) }>
       +-
    </button>

    <button className="btn btn-outline-danger"

onClick={ () => dispatch ({ type: "custom", payload:100 }) }>
  100
</button>
    
    </>
    )
}