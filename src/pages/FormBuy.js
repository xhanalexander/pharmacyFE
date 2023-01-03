import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from 'react';
import axios from 'axios';
import Select from "react-select";
import { Form } from 'react-bootstrap';
import { useEffect } from "react";

function FormBuy() {

   useEffect(() => {
      axios.get('http://localhost:5000/api/get/factory').then((res) => {
         const data = res.data.data;
         setPabrik(data)
      })
         .catch((err) => console.log(err));
   }, [])

   const [pabrik, setPabrik] = useState([]);

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
         axios.post('http://localhost:5000/api/create/obat', {
            kode: data.kode,
            nama: data.nama,
            kategori: data.kategori,
            jumlah: data.jumlah,
            satuan: data.satuan,
            harga: data.harga,
            expired: data.expired,
            produsen: data.produsen
         }).then((res) => {
            console.log(res.data)
         })
      } catch (error) {
         console.log(error)
      }
   }

   async function handle(e) {
      const newdata = { ...data }
      newdata[e.target.nama] = e.target.value
      setData(newdata)
   }

   // console.log(data)
   // https://www.digitalocean.com/community/tutorials/react-axios-react

   return (
      <div>
         <div className='container-fluid w-50 border border-2 rounded responsive'>
            <h1 className='text-center my-4'>Data Obat</h1>
            <form action="/" onSubmit={(e) => submit(e)} className="m-4" method="POST">
               <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Kode Obat</Form.Label>
                  <Form.Control type="text" onChange={(e) => handle(e)} value={data.kode} name="kode" placeholder="0A11" required />
               </Form.Group>
               <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Nama Obat</Form.Label>
                  <Form.Control type="text" onChange={(e) => handle(e)} value={data.nama} name="nama" placeholder="Hemaviton" required />
               </Form.Group>
               <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Kategori Obat</Form.Label>
                  <Form.Control type="text" onChange={(e) => handle(e)} value={data.kategori} name="kategori" placeholder="Herbal" required />
               </Form.Group>
               <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Jumlah Obat</Form.Label>
                  <Form.Control type="number" onChange={(e) => handle(e)} value={data.jumlah} name="jumlah" placeholder="0" min="1" required />
               </Form.Group>
               <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Satuan Obat</Form.Label>
                  <Form.Control type="text" onChange={(e) => handle(e)} value={data.satuan} name="satuan" placeholder="Kaplet" required />
               </Form.Group>
               <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Harga Obat</Form.Label>
                  <Form.Control type="number" onChange={(e) => handle(e)} value={data.harga} name="harga" placeholder="1000" min="100" required />
               </Form.Group>

               <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Produsen Obat</Form.Label>
                  <Select placeholde="pabrik obat" name="produsen" value={data.produsen} options={pabrik} isClearable={true} onChange={(e) => handle(e)} />
               </Form.Group>

               {/* <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Produsen Obat</Form.Label>
                  <Form.Select onChange={(e) => handle(e)} name="produsen">
                     {
                        data.map((item, index) => {
                           return (
                              <option key={index} value={item.id}>{item.nama}</option>
                           )
                        })
                     }
                  </Form.Select>
               </Form.Group> */}

               <Form.Group className="mb-5">
                  <Form.Label className="fw-semibold">Expired Obat</Form.Label>
                  <Form.Control type="date" onChange={(e) => handle(e)} value={data.expired} name="expired" placeholder="2022" required />
               </Form.Group>

               <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary w-50 text-center">Input Stock Obat</button>
               </div>

            </form>
         </div>
      </div>
   );
}

export default FormBuy;
