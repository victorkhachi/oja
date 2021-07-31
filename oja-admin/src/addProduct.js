import React, { useContext, useEffect, useState } from 'react'
import { Products } from './components/extras/contexts'
import AddProd from './components/extras/hooks/addProducts'

export default function AddProduct() {
    const {addProd}=AddProd()
    
    const {cat,setCat}=useContext(Products)
   const formData = new FormData()
   console.log(cat);
   useEffect(()=>formData.append('category',cat))
   const enterProduct=(e)=>{
       formData.append(e.target.name,e.target.value)
   }
   for(var key of formData.keys()){
   console.log(key)
}
   const enterImg= async(e)=>{
       console.log(e.target.files[0].name);
       
       formData.append('image', e.target.files[0])

   }
   
   
   const add= async (e)=>{
       e.preventDefault()
       for (var key of formData.keys()) {
           console.log(key)}
       addProd(formData)
   }
   

    return (
        <div style={{width:'100%',height:'50%'}}>
           <form onSubmit={add} className='prod-form'> 
                <div style={{width:'70%',height:'70%',display:'flex',justifyContent:'space-between'}}>
                  <input name='image' type='file' accept='image/*' onChange={enterImg}/>
                  <div className='input' >
                        <input type='text' name='name' placeholder='Product Name:' onChange={enterProduct}/>
                        <input type='text' name='price' placeholder='Price:' onChange={enterProduct}/>
                        <input type='text' name='unit' placeholder='unit' onChange={enterProduct} />
                  </div>
                </div>
               <button style={{width:'30%'}}>Add product</button>
            </form>
        </div>
    )
}
