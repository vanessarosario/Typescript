
import {Counter} from "./components/Counter";
import {Usuario} from "./components/usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRef } from "./components/ContadorRef";
import { Formulario } from "./components/formulario2";





function App() {
  return (
  <>
   <h1>React + TypeScript</h1> 
   <hr/>
    <h2>useState</h2> 
    <Counter />

    <Usuario />
  <h2>useEffect - useRef</h2>
  <hr/>

<TimerPadre />

<h2> useReducer</h2>
  <hr/>
  <ContadorRef />


<h2>CustomHooks</h2>
<hr/>

<Formulario />

<br/>
<br/>
<br/>
<br/>
  </>
);
}

export default App;
