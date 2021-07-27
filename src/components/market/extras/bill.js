import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Order, Total, UserContext } from './userContext'

export default function Bill(props) {
    const {total, setTotal}= useContext(Total)
    const {order ,setOrder}=useContext(Order)
    const {value, setValue}=useContext(UserContext)
    
    const items = value.map(item=>{
         return `${item.name} ${item.quantity}${item.unit}`

        
    })
    const done=()=>{
        setOrder({...order,list:items,amount:total})
    }
    console.log(order);
    
    return (
        <div className='bill'>
        <div className='order'>
                <div className='order-heading'>
                    <div style={{ marginLeft: '10%' }}>Order Summary:</div>
                    <div style={{marginRight:'10%'}}>{`N${total}`}</div>
                </div>
                <div className='bill-row'>Service fee and shipping:</div>
                <div className='bill-row'>total:</div>

            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around',height:'15%',alignItems:'center',marginTop:'5%' }}>
                <div style={{
                    background: '#D4AF37', marginLeft: '3%', display:`${props.display}` }} className='order-nav'>
                    Continue shopping</div>
                <Link  onClick={done} style={{ background: '#A5060A', marginRight: '3%' }} className='order-nav'>
                    Checkout
                        </Link>

            </div>
        </div>
    )
}
