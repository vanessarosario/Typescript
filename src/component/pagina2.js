import React from "react"

export const Pagina2 = (data, setdata) => {
  return (
      <div>
          <h1>Pagina 2</h1>
          <hr />
          <pre>
              {JSON.stringify(data, null,2)}
          </pre>
          <BotonCambiarData setdata={ setdata }/>
      </div>
  ) 
}