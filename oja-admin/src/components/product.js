import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import config from './config'
import Prod from './extras/hooks/product'
import { Products } from './extras/contexts'




export default function Product() {
    const {url}=config
    const [array, setArray] = useState([])
    const {cat,setCat}=useContext(Products)
    useEffect(()=>{axios.get(`${url}products/`).then(response=>{
        setArray(response.data.product)
    })},[url])
    console.log(array);
    const products= array.filter(product=>{
        return product.category===cat
    })
    if(!cat){
        return <Redirect to='/dashboard'/>
    }


    
    return (
        
    <div style={{width:'100%',height:'100%',textTransform:'capitalize',fontWeight:'bold'}}>
        <h1>Products</h1>
        <div style={{width:'100%',height:'40%',overflowY:'scroll'}}>
         {products.map(product=>(
            <Prod data={product} />
    ))}
       </div>
       <Link to ='/addProducts' style={{boxShadow:'0px 0px 2px 2px black', padding:'2%'}}>Add products</Link>

        </div>
    )
}
