// importar React de la biblioteca.
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Perfil = (props) => {
    /* ESTAS DOS CONSTANTES NO RECUERDO PARA QUE ERAN, entiendo que es para coger los valores de los inputs con usestate 
    Es decir, lo que está más abajo en HTML*/

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [respuesta,setRespuesta]= useState("");




    const email1 = (num) => {

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    user: localStorage.getItem("user"),
                    num: num,
                    contrasena:contrasena,
                    email:email
                }),
        };

        fetch("perfil", requestOptions)
            .then((response) => response.json())
            .then((response) => {
                setRespuesta(response)

            })
    }
   
    return (

        <div id='perfil' >

            <div >
                <Form.Label>Introduce tu nuevo email</Form.Label>
                <Form.Control type="text" placeholder="Pon tu UserName" onChange={(e) => setEmail(e.target.value)} />

                <Button variant="primary" onClick={() => email1(1)}>
                    Cambiar Email
                </Button>
                <br />
                <br />
                <br />
                <Form.Label>Introduce tu nueva contraseña</Form.Label>
                <Form.Control type="text" placeholder="Pon tu UserName" onChange={(e) => setContrasena(e.target.value)} />
                <Button variant="primary" onClick={() => email1(2)}>
                    Cambiar contraseña
                </Button>


            </div>
            <br />
            <br />
            <br />
            <div>
                <p> {respuesta.cambio==1 ? "Email cambiado" : respuesta.cambio==2 ? "contraseña cambiada":""}</p>
            </div>
        </div>

    )

}

export default Perfil;
