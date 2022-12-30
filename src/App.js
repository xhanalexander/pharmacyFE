// import './App.css';
import { Button, Table, Form, Nav, Navbar, Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:5000/api/get/obat')
         .then((res) => setData(res)).catch((err) => console.log(err));
   }, []);

   console.log("data", data)
   return (
      <div className="bg-dark-subtle">
         <header className="App-header bg-dark-subtle">
            <Navbar bg="dark" variant="dark" className="">
               <Container>
                  <Navbar.Brand href="#home">PharmacyUAS</Navbar.Brand>
                  <Nav className="me-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#features">Features</Nav.Link>
                     <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
               </Container>
            </Navbar>

            <div className='container-md p-8 m-10'>
               <h1 className='text-left'>Dashboard Drugstore</h1>
               <Table striped bordered hover size="sm" className='fs-6' >
                  <thead>
                     <tr>
                        <th>Kode</th>
                        <th>Nama Obat</th>
                        <th>Kategori</th>
                        <th>Jumlah</th>
                        <th>Satuan</th>
                        <th>Harga</th>
                        <th>Tanggal Kadaluarsa</th>
                        <th>Produsen</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>
                           { }
                        </td>
                        <td>Paracetamol</td>
                        <td>Obat Bebas</td>
                        <td>100</td>
                        <td>Tablet</td>
                        <td>5000</td>
                        <td>12/5/6</td>
                        <td>PT. Obat Bebas</td>
                     </tr>
                  </tbody>
               </Table>

            </div>



         </header>
      </div>
   );
}

export default App;
