import React, {useEffect, useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';









const Registro = () => {
  const navigate = useNavigate()

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [username, setUsername] = useState("");
  const [registro1, setRegistro1] = useState("");
  
  useEffect(() => {
   if (registro1 != ""&&registro1!="El usuario existe") {
     navigate('/login')
   }
  }, [registro1]);



  const enviar = () => {


    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        email: email,
        contrasena: contrasena,
        username: username
      })
    };
    fetch("registro", requestOptions)
      .then((response) => response.json())
     
      .then((response) => {

        setRegistro1(response.message)
       

      });


  };

  return (
   

    <div id="registro">
     

          <Form>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Nombre</Form.Label>
        <Form.Control id="nombre" type="text" placeholder="Pon tu nombre" onChange={(e) => setNombre(e.target.value)} />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Apellido</Form.Label>
        <Form.Control id="apellido" type="text" placeholder="Pon tu apellido" onChange={(e) => setApellido(e.target.value)} /> 

      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control id="email" type="email" placeholder="Pon tu email"  onChange={(e) => setEmail(e.target.value)} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control id="contrasena" type="password" placeholder="Pon tu contraseña" onChange={(e) => setContrasena(e.target.value)} /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>UserName</Form.Label>
        <Form.Control id="username" type="text" placeholder="Pon tu UserName" onChange={(e) => setUsername(e.target.value)} />

      </Form.Group>
      
      <p>{ registro1!="El usuario existe" ?"":"El username ya existe"}</p>



      <Button id="boton" variant="primary"  onClick={() => enviar()}>
        Registrarse
      </Button>

      
    </Form>

    </div>
  );
}

export default Registro;
