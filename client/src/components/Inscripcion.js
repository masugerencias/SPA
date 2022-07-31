// importar React de la biblioteca.
import React from 'react'; 
import { useState,useEffect } from 'react';
import { Form, Button ,Card} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



const Inscripcion = (props) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [yainscrito, setYainscrito] = useState("");
    const [tarjeta, setTarjeta] = useState("");

//LOS DEMAS DATOS NO LOS PONGO PORQUE NO LOS GUARDAMOS EN LA BBDD
   
   



const inscribir = () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({idprueba: props.idprueba, user, tarjeta}),
  };


  fetch("inscribirse", requestOptions)
    .then((response) => response.json())
    .then((response) => {
      setYainscrito(response)
      setTarjeta("")


    });
  
      
     
    
}



   

return (
<div>
  <Form>
    PAGAR INSCRIPCION:
  <Form.Group className="mb-3" controlId="">
  <Form.Label>Número de tarjeta</Form.Label>
  <Form.Control type="password" placeholder="16 dígitos" onChange={(e) => setTarjeta(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
  <Form.Label>Nombre de tarjeta</Form.Label>
  <Form.Control type="text" placeholder="" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
  <Form.Label>Fecha de caducidad</Form.Label>
  <Form.Control type="text" placeholder="09/29" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
  <Form.Label>CVV</Form.Label>
  <Form.Control type="text" placeholder="555" />
  </Form.Group>


  <Button variant="primary"  onClick={() => inscribir()}>
        PAGAR
      </Button>


</Form>

  {yainscrito === true ? <Card style={{ width: '12rem' }}>

  <Card.Body>
    <Card.Title>ENHORABUENA</Card.Title>
    <Card.Text>Te has inscrito correctamente</Card.Text>
  </Card.Body>
</Card> : yainscrito === false ? <Card style={{ width: '12rem' }}>

  <Card.Body>
    <Card.Title>YA ESTBAS INSCRITO</Card.Title>
    <Card.Text>No puedes volver a inscribirte</Card.Text>
  </Card.Body>
</Card> : <p></p>}
</div>
    )

}






export default Inscripcion;






{/* <div id='login'>
    PAGAR INSCRIPCION:
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Número de tarjeta</label>
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder ="XXXXXXXXXXXXXXXX" aria-describedby="emailHelp"onChange={(e) => setTarjeta(e.target.value)}/>
    <div id="emailHelp" class="form-text"></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre de tarjeta</label>
    <input type="text" class="form-control"   placeholder ="Nombre y apellidos" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Fecha caducidad</label>
    <input type="text" class="form-control"  placeholder ="07/01" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">CVV</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div> 

 
  <button class="btn btn-dark" onClick={() => pagar()}>PAGAR</button>












  </div>
*/}