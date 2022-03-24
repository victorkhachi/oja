import React, { useEffect, useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Back from '../../images/svg/Back';
import BlackLogo from '../../images/svg/BlackLogo';
import LocationSvg from '../../images/svg/Location';



export default function Location() {
    
    
    const [address,setAddress]=useState({region:'',address:''})
    const [message,setMessage]=useState('')
    const [redirect, setRedirect]=useState(false)
    const location=(e)=>{
     setAddress({...address,[e.target.name]:e.target.value})
    }
   
    const enterMarket= async ()=>{
         
        if (address.region.trim()!=='' && address.address.trim()!==''){
            
            localStorage.setItem('zone',address.region)
            localStorage.setItem('address', address.address)


            setRedirect(true)
    
            
        }
        else{
           setMessage('please enter a valid location')
        }
    }
    useEffect(()=>setRedirect(),[])
    if(redirect){
        return <Redirect to='/market'/>
    }
    // if (order.name === '') {
    //     return <Redirect to='/signIn' />
    // }
    
    return (
        <div className="page">
            <div className='market-cover'></div>
            <div className='location-head' >
                <Link to='/'>
                    <Back/>
                </Link>
                <span>
                    <BlackLogo/>
                </span>
            </div>
            <div className='location-input'>
                <h2 >
                   Select Location
               </h2>
               <select className='selection ' name='region' type='text'  onChange={location}>
                   <option  disabled selected hidden >select region </option>
                   <option value='lekki phase 2'>Island(lekki phase 1)</option>
                    <option value='ikeja/magodo'>Ikeja/Magodo</option>
                    <option value='Unilag'>Unilag</option>
                    <option value='lekki phase 2'>Island (lekki phase 2)</option>
               </select>
                <p style={{ width: '100%', textAlign: 'center', color: '#A5060A'}}>{message}</p>
               
                <input  name='address' type='text' placeholder='Enter address' onChange={location}/>
                <div className='icon' onClick={enterMarket} >
                    <LocationSvg />
                </div>
        
            </div>
        </div>
    )
}



