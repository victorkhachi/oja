import React, { useContext, useEffect, useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { Order } from './extras/userContext'

export default function Location() {
    const {order,setOrder}=useContext(Order)
    console.log(order);
    const [address,setAddress]=useState({region:'',address:''})
    const [message,setMessage]=useState('')
    const [redirect, setRedirect]=useState(false)
    const location=(e)=>{
     setAddress({...address,[e.target.name]:e.target.value})
    }
   
    const enterMarket= async ()=>{
         
        if (address.region.trim()!=='' && address.address.trim()!==''){
            setOrder({ ...order, zone: address.region, address: address.address })
            setRedirect(true)
            console.log(order);
            
        }
        else{
           setMessage('please enter a valid location')
        }
    }
    useEffect(()=>setRedirect(),[order])
    if(redirect){
        return <Redirect to='/market'/>
    }
    if (order.name === '') {
        return <Redirect to='/signIn' />
    }
    
    return (
        <div className="page">
            <div className='market-cover'></div>
            <div className='location-head' >
                <Link to='/' className='back location-back'><i class=" fa-2x fas fa-arrow-left" ></i></Link>
                <h1 className='name' style={{ width: '20%', fontSize: '50px',  marginBottom: '0px', marginLeft: '20%' }}>
                    ọjà.com
                </h1>
                
            </div>
            <div className='location-input'>
                <h2 >
                   Select Location
               </h2>
               <input name='region' type='text' placeholder='pick region' onChange={location}  />
                <p style={{ width: '100%', textAlign: 'center', color: '#A5060A'}}>{message}</p>
               
                <input name='address' type='text' placeholder='Enter address' onChange={location}/>
                <div onClick={enterMarket} >
                    <i class="fa-2x fas fa-location-arrow" style={{ color:'#A5060A'}}></i>
                </div>
        
            </div>
        </div>
    )
}



