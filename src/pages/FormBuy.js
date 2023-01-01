import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

function FormBuy() {
   
   const [data, setData] = useState({
      kode: '',
      nama: '',
      kategori: '',
      jumlah: 0,
      satuan: '',
      harga: 0,
      expired: '',
      produsen: ''
   })

   function submit(e) {
      e.preventDefault()
      try {
         axios.post('http://localhost:5000/api/post/obat', {
            kode: data.kode,
            nama: data.nama,
            kategori: data.kategori,
            jumlah: data.jumlah,
            satuan: data.satuan,
            harga: data.harga,
            expired: data.expired,
         }).then((res) => {
            console.log(res.data)
         })
      } catch (error) {
         console.log(error)
      }
   }

   function handle(e) {
      const newdata = { ...data }
      newdata[e.target.id] = e.target.value
      setData(newdata)
   }

   console.log(data)
   // https://www.digitalocean.com/community/tutorials/react-axios-react
   return (
      <div>
         <div className='container-lg w-50 border border-2 rounded'>
            <h1 className='text-center my-4'>Data Obat</h1>
            <form action="" onSubmit={(e) => submit(e)} className="m-4">
               <Form.Group className="mb-3">
                  <Form.Label>Kode Obat</Form.Label>
                  <Form.Control type="text" onChange={(e) => handle(e)} value={data.kode} id="kode" placeholder="0A11" required/>
               </Form.Group>
               <Form.Group className="mb-3">
                  <Form.Label>Nama Obat</Form.Label>
                  <Form.Control type="text" onChange={(e) => handle(e)} value={data.nama} id="nama" placeholder="Hemaviton" required/>
               </Form.Group>
               <Form.Group className="mb-3">
                  <Form.Label>Kategori Obat</Form.Label>
                  <Form.Control type="text" onChange={(e) => handle(e)} value={data.kategori} id="kategori" placeholder="Herbal Bebas" required/>
               </Form.Group>
               <Form.Group className="mb-3">
                  <Form.Label>Jumlah Obat</Form.Label>
                  <Form.Control type="number" onChange={(e) => handle(e)} value={data.jumlah} id="jumlah" placeholder="0" min="1" required/>
               </Form.Group>
               <Form.Group className="mb-3">
                  <Form.Label>Satuan Obat</Form.Label>
                  <Form.Control type="text" onChange={(e) => handle(e)} value={data.satuan} id="satuan" placeholder="kapsul" required/>
               </Form.Group>
               <Form.Group className="mb-3">
                  <Form.Label>Harga Obat</Form.Label>
                  <Form.Control type="number" onChange={(e) => handle(e)} value={data.harga} id="harga" placeholder="1000" min="100" required/>
               </Form.Group>
               <Form.Group className="mb-5">
                  <Form.Label>Expired Obat</Form.Label>
                  <Form.Control type="date" onChange={(e) => handle(e)} value={data.expired} id="expired" placeholder="2022" required/>
               </Form.Group>
               {/* <input type="text" onChange={(e) => handle(e)} value={data.} name="produsen" id="produsen" placeholder="PT" /> */}
               <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary w-50 text-center">Submit</button>

               </div>

            </form>
         </div>
      </div>
   );
}

export default FormBuy;
