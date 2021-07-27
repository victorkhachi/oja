import React, { Fragment, useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Order } from './contexts'

export default function Orders({data}) {
    const [redirect, setRedirect]=useState(false)
    const {value , setValue}=useContext(Order)
    const open =()=>{
        setValue({name:data.name,address:data.address})
        setRedirect(true)
    }
    if(redirect){
       return <Redirect to ='/orders'/>
    }
    return (
        <Fragment>
            <div onClick={open} key={data.id} className='orders'>
                <div style={{ marginLeft: '2%' }}>Order in {data.address} from {data.name}</div>
            </div>

        </Fragment>
            
        
    )
}
