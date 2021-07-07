import React from 'react'
import {Link} from 'react-router-dom'

export default function Location() {
    
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
               <input  />
               
                   <input  type='text' placeholder='Enter address'/>
                <div >
                    <i class="fa-2x fas fa-location-arrow" style={{ color:'#A5060A'}}></i>
                </div>
        
            </div>
        </div>
    )
}



