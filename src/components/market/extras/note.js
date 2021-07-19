import React, { useState } from 'react'
import { Order } from './userContext'

export default function Note(){
    const [note, setNote]=useState('')
    const {order,setOrder}=React.useContext(Order)
    const typing=(e)=>{
         setNote(e.target.value)
         console.log(note);
    }  
    React.useEffect(()=>setOrder({...order,note:note}),[note])
    const save=()=>{
        setOrder({...order,note:note})
        console.log(order);
        window.location.replace('/cart')
    }
    return (
        <div className='page'>
            <div style={{ width: '60%', position: 'absolute', top: '10%', left: '15%', height:'50%'}}>
                <div style={{ width: '100%', color: 'white', fontWeight: 'bold', background:'#55DB52',padding:'2% 2%'}}>Add Notes</div>
                <textarea onChange={typing} placeholder='Enter  order descriptions'style={{width:'100%',height:'100%',padding:'2%'}} />
                <button onClick={save} className='reset'>Done</button>
            </div>
        </div>
    )
}
