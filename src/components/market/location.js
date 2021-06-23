import React from 'react'
import {Link} from 'react-router-dom'

export default function Location() {
    
    return (
        <div className="page">
            <div className='market-cover'></div>
            <div className='' style={{ width: '43%',display:'flex',justifyContent:'space-between'  }}>
                <Link style={{alignSelf:'center', margin:'15% 0px 0px 8%' }} className='back'><i class=" fa-2x fas fa-arrow-left" style={{  }}></i></Link>
                <h1 className='name' style={{ width: '20%', fontSize: '50px',  marginBottom: '0px', marginLeft: '20%' }}>
                    ọjà.com
                </h1>
                
            </div>
            <div style={{width:'95%',margin:'auto',marginTop:'30%'}}>
                <h2 style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',}}>
                   Select Location
               </h2>
               <input style={{width:'95%',margin:'5px',padding:'3% 0%',border:'2px solid #55DB52',borderRadius:'10px'}} />
               
                   <input style={{width:'95%',margin:'5px',padding:'3% 0%',border:'2px solid #55DB52',borderRadius:'10px'}} type='text' placeholder='Enter address'/>
                <div style={{
                    position: 'absolute', width: '70px', height: '70px', border: '3px solid #A5060A', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', bottom: '47%', right: '7%', background:'#E5E5E5'}}>
                    <i class="fa-2x fas fa-location-arrow" style={{ color:'#A5060A'}}></i>
                   </div>
        
            </div>
        </div>
    )
}



