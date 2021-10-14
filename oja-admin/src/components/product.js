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
    const headers= {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                }
    const [display, setDisplay] = useState('flex')
    const [totalPages, setTotalPages] = useState()
    const [page,setPage]=useState(1)


    useEffect(() => axios.get(`${url}products/?category=${cat}&page=${page}`, headers).then(response => {
        setTotalPages(response.data.totalPages);
        return response.data.product
    }).then(response => setArray(response)), [page])

    useEffect(() => {
        if (page === totalPages) setDisplay('none')
        else setDisplay('flex')
    }, [page])
    
    return (
        
    <div style={{width:'100%',height:'100%',textTransform:'capitalize',fontWeight:'bold'}}>
        <h1>Products</h1>
        <div style={{width:'100%',height:'40%',overflowY:'scroll'}}>
         {array.map(product=>(
            <Prod data={product} />
    ))}
       </div>
            <div style={{ justifyContent: 'space-between', width: '200px', height: '40px', color: '#A5060A', textTransform: 'capitalize', margin: 'auto', display: display }}><div onClick={() => { if (page > 1) setPage(page - 1) }}> prev</div><div onClick={() => { if (totalPages > page) setPage(page + 1) }}>Next</div></div>

       <Link to ='/addProducts' style={{position:'absolute',boxShadow:'0px 0px 2px 2px black', padding:'2%',top:'50%'}}>Add products</Link>

        </div>
    )
}
