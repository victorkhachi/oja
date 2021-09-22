import React, { useContext } from 'react'
import { Order } from '../extras/contexts'

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
                       <span>Items</span>
                        <li className='items'><span>Name</span> <span>Quantity</span> <span>Cost</span></li>

                       <div>{value.list.map(item=>(

                          <li className='items'><span>{item.name}</span> <span>{item.quantity}</span> <span>{item.cost}</span></li>
                       ))}
                       </div>
                       
                   </ul>

                   <div className='total'>Total : {value.total_price}</div>
                </div>
                <div className='order-note'>
                  <div style={{margin:'3px',fontWeight:'bold' }}>Notes</div>
                  {value.note}
                </div>
            </div>
        </div>
    )
}
