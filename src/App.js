import React from "react";
import ApiPokemon from "./Componentes/APIPokemon/ApiPokemon";


/*
Inicializar proyecto: npm start
Detener el proyecto: Ctrl+C
*/

class App extends React.Component {




  render() {

    /* AplicacionSegundaPalabra -> PascalCase
      onClick -> camelCase
    */

    return(
      <div className="container">
        <h1>Api pokemon con fetch</h1>
        


        <ApiPokemon />
        

      </div>
    );
  }

}

export default App;