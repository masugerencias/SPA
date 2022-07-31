// import { Card, Button } from 'react-bootstrap'
// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// //Componente funcional -> 


// function Historial(props) {
    
//     const [user,setUser] = useState(localStorage.getItem("user"));
//     const [historial,setHistorial]= useState("")

//     useEffect(() => {
        
//        const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(
//           {
//             user
//           }),
//       };

//     fetch("historial", requestOptions)
//       .then((response) => response.json())
//       .then((response) => {
//         setHistorial(response.datosHistorial)

//       });


//        }, []);
   
//   console.log(historial)
   
//         return (
//         <div>
//    {historial ? historial.map((busqued, i) => {
//           return (
//             <Card style={{ width: '18rem' }} key={i}>
              

//               <Card.Body>
//                 <Card.Title>{busqued.nombreprueba}</Card.Title>
//                 <Card.Text>{busqued.tipo}</Card.Text>
//                 <Card.Text>{busqued.fechainicio}</Card.Text>
//                 <Card.Text>{busqued.fechafin}</Card.Text>
//                 <Card.Text>{busqued.precio} €</Card.Text>
//                 <Card.Text>{busqued.descripcion}</Card.Text>
                
//               </Card.Body>
//             </Card>
//           )
//         }) : <div>
            
//         </div>} 
//         </div>
//     )




// }

// export default Historial;








import React, { Component } from "react";


import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";

export default class Historial extends Component {
  constructor(props) {
    super(props);
    this.cargarPaises();
    this.state = {
      pruebas: [], //TODAS LAS PRUEBAS
      offset: 0, //INDICE A PARTIR DEL CUAL CARGAMOS LOS ELEMENTOS A MOSTRAR
      elements: [], //LA PRUEBA QUE SE CARGAN EN LA PAGINA ACTUAL
      perPage: 1, //NUMERO DE ELEMENTOS POR PAGINA
      currentPage: 0, //PAGINA ACTUAL, DEFAULT 0
      
    };
    
    
  }
  
  cargarPaises = () => {
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
         user: localStorage.getItem("user")
        }),
    };

    fetch("historial", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.datosHistorial)
        this.setState(
          {
            pruebas: response.datosHistorial,
            pageCount: response.datosHistorial.length //TOTAL DE ELEMENTOS = NUMERO TOTAL DE PAGINAS
          },
          () => this.setElementsForCurrentPage()
        );
      });


  };

setElementsForCurrentPage() {
  let elements = this.state.pruebas
    .slice(this.state.offset, this.state.offset + this.state.perPage)
    .map((prueba, i) => {
      return (
        
        <tr key={i}>
          <td>{prueba.id_prueba}</td>
          <td>{prueba.nombreprueba}</td>
          <td>{prueba.tipo}</td>
          <td>{prueba.fechainicio}</td>
          <td>{prueba.fechafin}</td>
          <td>{prueba.precio}</td>
          <td></td>
        </tr>
        
      );
    });
  this.setState({ elements: elements });
}
handlePageClick = pruebas => {
  const selectedPage = pruebas.selected;
  const offset = selectedPage * this.state.perPage;
  this.setState({ currentPage: selectedPage, offset: offset }, () => {
    this.setElementsForCurrentPage();
  });
};

componentDidMount() {
  this.cargarPaises();
}
render() {
  let paginationElement;
  if (this.state.pageCount > 1) {
    paginationElement = (
      <ReactPaginate
        previousLabel={"← Anterior"}
        nextLabel={"Siguiente →"}
        breakLabel={<span className="gap">...</span>}
        pageCount={this.state.pageCount}
        onPageChange={this.handlePageClick}
        forcePage={this.state.currentPage}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-link"}
        previousClassName={"page-link"}
        previousLinkClassName={"page-item"}
        nextClassName={"page-link"}
        nextLinkClassName={"page-item"}
        disabledClassName={"disabled"}
        activeClassName={"page-item active"}
        activeLinkClassName={"page-link"}
      />
    );
  }
  return (
    <div>
      {this.state.pruebas.length > 0 && (
        <div>
          <Table striped bordered hover variant="dark">
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>TIPO</th>
              <th>FECHA DE INICIO</th>
              <th>FECHA FIN</th>
              <th>PRECIO</th>
            </tr>
            {this.state.elements}
          </Table>
          <div>{paginationElement}</div>
        </div>
      )}
    </div>
  );
}
}