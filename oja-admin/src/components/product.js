import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import config from './config'
import Prod from './extras/hooks/product'
import {Products} from './extras/contexts'




export default function Product() {
    const {url}=config
    const [array, setArray] = useState([])
    const {cat,setCat}=useContext(Products)

    const token= localStorage.getItem('token')
    const items = async () => {
        try {
            const { status, data } = await axios({
                method: 'get',
                url: `${url}products/`,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                },
                data: cat

            })
            console.log(status, data);
            setArray(data.product)


        }
        catch (error) {
            console.log(token)

            console.log(error.response)

        }
        console.log(cat);
    }
    
    
    useEffect(()=>items(),[url])
    if(!cat){
        return <Redirect to='/dashboard'/>
    }
    const item = array.filter(item=>{
        return item.category===cat
    })

    
    return (
        
    <div style={{width:'100%',height:'100%',textTransform:'capitalize',fontWeight:'bold'}}>
        <h1>Products</h1>
        <div style={{width:'100%',height:'40%',overflowY:'scroll'}}>
         {item.map(product=>(
            <Prod data={product} />
    ))}
       </div>
       <Link to ='/addProducts' style={{position:'absolute',boxShadow:'0px 0px 2px 2px black', padding:'2%',top:'50%'}}>Add products</Link>

        </div>
    )
}
