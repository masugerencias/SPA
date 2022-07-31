
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

//Componente funcional -> 


function Header(props) {
    const [logeado,setLogeado]=useState(localStorage.getItem("user"))
    const navigate = useNavigate()
    const sendDesconectar = () => {
       localStorage.clear()
       window.location.assign("/");
       
    };

    console.log(props.pagina1)
   
        return (
        <div className="headerNav" class="headerNav">
            
                <div class="navbar-sing"> 
                
        
                {props.pagina3=="verificacion"?"":<Button variant="light" size="lg" className="buttonHome"><Link to={"/"} className="buttonHome">Home</Link></Button>}

                    {props.pagina3=="verificacion"?"":logeado!=null ? "":<Button variant="light" size="lg" className="buttonHome"><Link to={"/login"}className="buttonHome">Login</Link></Button>}

                    {props.pagina3=="verificacion"?"":logeado!=null ? "":<Button variant="light" size="lg" className="buttonHome"><Link to={"/registro"} className="buttonHome">Registro</Link></Button>}

                   


                   {logeado!= null?props.pagina3=="verificacion"?"":<Button variant="light" size="lg" className="buttonHome"><Link to={"/perfil"} className="buttonHome">Perfil</Link></Button>:""}

                   {logeado!= null?props.pagina3=="verificacion"?"":<Button variant="light" size="lg" className="buttonHome"><Link to={"/historial"} className="buttonHome">Historial</Link></Button>:""}
                   {logeado!=null? <Button variant="dark"  onClick={() => sendDesconectar()}>desconectar</Button>:""}

                </div>
                
           
        
        </div>
    )




}

export default Header;



