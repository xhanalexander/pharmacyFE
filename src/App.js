// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState, useEffect } from 'react'
import { Button, Table, Navbar, Container, Nav } from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'
import Transactions from "./pages/Transaction"
import FormBuy from "./pages/FormBuy"

function App() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:5000/api/get/obat').then((res) => {
         const data = res.data.data;
         setData(data)
      })
         .catch((err) => console.log(err));
   }, [])

   console.log("data", data)

   return (
      <div className="bg-dark-subtle">
         <header className="bg-dark-subtle">

            <Navbar bg="dark" variant="dark">
               <Container>
                  <Navbar.Brand href="#home">PharmacyUAS</Navbar.Brand>
                  <Nav className="me-auto">
                     <Nav.Link href="#features">Transaction</Nav.Link>
                  </Nav>
               </Container>
            </Navbar>

            <div className='container-md p-8 m-10'>
               <h1 className='text-left my-4'>Dashboard</h1>
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
                     {data.map((item) => (
                        <tr>
                           <>
                              <td>{item.kode}</td>
                              <td>{item.nama}</td>
                              <td>{item.kategori}</td>
                              <td>{item.jumlah}</td>
                              <td>{item.satuan}</td>
                              <td>{item.harga}</td>
                              <td>{moment(item.expired).format('l')}</td>
                              <td>{item.produsen.nama}</td>
                           </>
                        </tr>
                     ))}
                  </tbody>
               </Table>
               <Button variant="outline-primary" className='my-2 px-4' size="sm" to="/">Beli</Button>
            </div>

            <Transactions />

            <FormBuy />

         </header>
      </div >
   );
}

export default App;
