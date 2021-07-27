import React, { useContext } from 'react'
import { Order } from './extras/contexts'

export default function OrderPage() {
     const {value,setValue}=useContext(Order)



    return (
        <div style={{width:'100%',height:'90%'}}>
            <h1>Order</h1>
            <div style={{height: '100%',width: '100%'}}>
                <div className='person-detail'>Name:<span style={{marginLeft:'5%', textTransform:'uppercase'}}>{value.name}</span></div>
                <div className='person-detail'>Address:<span style={{ marginLeft: '5%', textTransform: 'uppercase' }}>{value.address}</span></div>
                <div className='person-detail'>Tel:<span style={{ marginLeft: '5%', textTransform: 'uppercase' }}>{value.tel}</span></div>
                <div className='orderd-items'>
                   <ul style={{fontWeight:'bold'}}>
                       Items
                   </ul>
                </div>
                <div className='order-note'>
                  <div style={{margin:'3px',fontWeight:'bold' }}>Notes</div>
                </div>
            </div>
        </div>
    )
}
