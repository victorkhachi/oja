import React, { useContext, useEffect, useState } from 'react'
import { Products } from '../extras/contexts'
import AddProd from '../extras/hooks/addProducts'

export default function AddProduct() {
    const {addProd}=AddProd()
    const formData = new FormData()
    const [product,setProduct]=useState({name:'',price:'',unit:'',weight:''})
    // const {cat,setCat}=useContext(Products)
//    console.log(cat,'hi');
   useEffect(()=>formData.append('category',localStorage.getItem('cat')))
   const enterProduct=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
   }
    
        
        

    
  
   
   
   const add= async (e)=>{
       e.preventDefault()
       formData.append('name', product.name)
       formData.append('price', product.price)
       formData.append('unit', product.unit)
       formData.append('weight', product.weight)

       for (var key of formData.values()) {
           console.log(key)}
       addProd(formData)
   }
   

    return (
        <div style={{width:'100%',height:'50%'}}>
           <form onSubmit={add} className='prod-form'> 
                <div style={{width:'70%',height:'70%',display:'flex',justifyContent:'space-between'}}>
                  <input name='image' type='file' accept='image/*' onChange={(e)=>formData.append('image', e.target.files[0])}/>
                  <div className='input' >
                        <input type='text' name='name' placeholder='Product Name:' onChange={enterProduct}/>
                        <input type='text' name='price' placeholder='Price:' onChange={enterProduct}/>
                        <input type='text' name='unit' placeholder='unit' onChange={enterProduct} />
                        <input type='text' name='weight' placeholder='unit Weight in Kg' onChange={enterProduct} />

                  </div>
                </div>
               <button style={{width:'30%'}}>Add product</button>
            </form>
        </div>
    )
}
