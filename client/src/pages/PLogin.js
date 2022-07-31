

import React , {Component} from "react"
import Login from "../components/Login";
import Header from "../components/Header";




//Componente funcional -> 
function PLogin() {


  return (

     <div className="App">
         <Header pagina1="login"/>  
       <Login/>        
     </div>

  );

}

export default PLogin;


