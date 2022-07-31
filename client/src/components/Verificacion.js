// importar React de la biblioteca.
import React from 'react'; 
import { useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';


const Verificacion = (props) => {
/* ESTAS DOS CONSTANTES NO RECUERDO PARA QUE ERAN, entiendo que es para coger los valores de los inputs con usestate 
Es decir, lo que está más abajo en HTML*/

    const [id_usuario_pruebas, setId_usuario_pruebas] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [prueba, setPrueba] =  useState("");
    const [dorsal, setDorsal] =  useState("");
    
   
   //OJO, ESTO VIENE DE LA TABLA DE LA RELACION USUSARIO-PRUEBAS
    const verificar = () => {
        console.log(id_usuario_pruebas)
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( 
              {
                id_usuario_pruebas:id_usuario_pruebas,
                tarjeta:tarjeta
          }),
        };

        fetch("verificacion", requestOptions)
          .then((response) => response.json())
          .then((response) =>{
            setDorsal(response.dorsal)
            setPrueba(response.prueba)
            console.log(response.dorsal)
          })  
          //resultados saldrán en la consola
        } 

        const entregar = (inscripcion) => {
           console.log(inscripcion)
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( 
                {
                  numeroInscripcion:inscripcion,
                  id_usuario_pruebas:id_usuario_pruebas,
                tarjeta:tarjeta
                  
            }),
          };
          console.log(requestOptions)
          fetch("entregar", requestOptions)
          .then((response) => response.json())
          .then((response) =>{
               setDorsal(response.dorsal)
               setPrueba(response.prueba)
          console.log(response.dorsal)
          })  
            //resultados saldrán en la consola
          } 


return (

<div>
    
   <div id="verificacion">
  <Form>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Introduce el código de inscripción</Form.Label>
        <Form.Control type="text" class="form-control" onChange={(e) => setId_usuario_pruebas(e.target.value)}/>
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Introduce tu número de tarjeta</Form.Label>
        <Form.Control type="password" class="form-control" onChange={(e) => setTarjeta(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary"  onClick={() => verificar()}>COMPROBAR
        
      </Button>
    </Form>
    </div>
    <br/>
    <br/>
    
    <div >
{dorsal=="" ? "": 

  dorsal.estado ?
  
<div id="">
<p>El dorsal con el numero {dorsal.dorsal} ya esta entregado</p>
<p>Datos de la prueba</p>
<p>nombre: {prueba.nombreprueba}</p>  
<p>tipo: {prueba.tipo}</p>
<p>Fecha de inicio: {prueba.fechainicio}</p>
<p>Fecha fin: {prueba.fechafin}</p>
<p>Precio: {prueba.precio}</p>
<p>Descripcion: {prueba.descripcion}</p>
  </div>
  : <div>
  <p>Verificación correcta, le corresponde el dorsal numero {dorsal.dorsal}</p>
  <p>Datos de la prueba</p>
  <p>nombre: {prueba.nombreprueba}</p>  
  <p>tipo: {prueba.tipo}</p>
  <p>Fecha de inicio: {prueba.fechainicio}</p>
  <p>Fecha fin: {prueba.fechafin}</p>
  <p>Precio: {prueba.precio}</p>
  <p>Descripcion: {prueba.descripcion}</p>
  <Button class="btn btn-dark" onClick={() => entregar(id_usuario_pruebas)}>Entregar</Button>
    </div>
   
}
</div>
  </div>

    )

}






export default Verificacion;