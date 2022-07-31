

import React , {Component} from "react"

import Header from "../components/Header";
import Historial from "../components/Historial";



//Componente funcional -> 
function PHistorial() {


  return (

     <div className="App">
         <Header pagina5="historial"/>  
              <Historial/>
     </div>

  );

}

export default PHistorial;


