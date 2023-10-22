// Import Area
"use client"
import { MenuItem, Select } from '@mui/material'
import { useState } from 'react';

export default function Home() { //old way to define a function

  //2.1 Hook Area
  const [selectedValue, setSelectedValue] = useState('');
  const [stockPrice, setStockPrice] = useState('');
  //2.2 Definition Area
  const handleChange = (saurabh) => {
    //object.property.property
    console.log(saurabh.target.value)

    // Now call the api

    // this is called promisChain
    fetch('/api/getstockprice').then((res)=>{
     return res.json()
      }).then((data)=>{
        console.log(data);
        console.log(data.price);
        setStockPrice(data.price)
      }).catch((err)=>{

      }).finally(()=>{

      });

  }// New way define a function

  return (
    <main>
    <h1>Current price of below stock is{stockPrice}</h1>
      <Select value={selectedValue}
          onChange={handleChange}>

          <MenuItem value="icici">ICICI BANK</MenuItem>
          <MenuItem value="hdfc">HDFC BANK</MenuItem>
          <MenuItem value="idfc">IDFC BANK</MenuItem>
      </Select>

    </main>
  )
}
