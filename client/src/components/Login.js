// importar React de la biblioteca.
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Login = (props) => {
  /* ESTAS DOS CONSTANTES NO RECUERDO PARA QUE ERAN, entiendo que es para coger los valores de los inputs con usestate 
  Es decir, lo que está más abajo en HTML*/

  const [username, setUsername] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const entrar = () => {
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          username: username,
          contrasena: contrasena,
        }),
    };

    fetch("login", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setLogin(response.message)
        console.log(response.message)
       /* HEMOS QUITADO EL SET TIMER  */
          if (response.message === true) {
            localStorage.setItem('user', response.username );
            
            if (response.empleado === true) {
                navigate("/verificacion")

            } else {
              window.location.assign("/");  //modificar 
            }
          } else {
            setLogin(response.message)
          }
        
      });

  }

  return (

    <div >
   
<div id='login'>
      <Form>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Pon tu UserName" onChange={(e) => setUsername(e.target.value)} />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password"  placeholder="Pon tu contraseña" onChange={(e) => setContrasena(e.target.value)} />
      </Form.Group>
      
      <Button variant="primary"  onClick={() => entrar()}>
        Entrar
      </Button>
    </Form>
    
    </div>
    <br/>
    <br/>
    <br/>
    <div>
    <p> {login != true ? "Email o contraseña incorrectos" : ""}</p>
    </div>
    </div>

  )

}

export default Login;



