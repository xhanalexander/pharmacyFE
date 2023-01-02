import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'

function Transactions() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:5000/api/orders').then((res) => {
         const data = res.data.data;
         setData(data)
      })
         .catch((err) => console.log(err));
   }, []);

   console.log("data", data)

   return (
      <div>
         <div className='container-md p-8 m-10'>
            <h1 className='text-left my-4'>Transaction</h1>
            <Table striped bordered hover responsive size="sm" className='fs-6 table-sort' >
               <thead>
                  <tr>
                     <th>Bulan/Tahun</th>
                     <th>Nama</th>
                     <th>Jumlah</th>
                     <th>Subtotal</th>
                  </tr>
               </thead>
               <tbody>
                  {data.map((item) => (
                     <tr>
                        <>
                           <td>{moment(item.date).format('M/YYYY')}</td>
                           <td>{item.obat.nama}</td>
                           <td>{item.jumlah}</td>
                           <td>{item.total}</td>
                        </>
                     </tr>
                  ))}
                  <tr>
                     <td colSpan={3} className="fw-semibold text-right">Total</td>
                     <td></td>
                  </tr>
               </tbody>
            </Table>
         </div>
      </div>
   )
}

export default Transactions;
