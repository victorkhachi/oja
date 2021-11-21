import React from 'react'
import axios from 'axios'
import config from '../config'
// import { Order } from '../extras/contexts'

export default function OrderPage() {
    const {url}= config;
    const token = localStorage.getItem('token')

     const headers= {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                }
     const [value,setValue]=React.useState({})
     const [list,setList]=React.useState([])
     React.useEffect(() => {axios.get(`${url}orders/getById/?id=${localStorage.getItem('id')}`, {headers:headers}).then(response =>{
        return response.data
    }).then(response=> {setValue(response.data)
     return JSON.parse(response.data.list)}).then(response=>setList(response))},[url])


    return (
        <div style={{width:'100%',height:'90%'}}>
            <h1>Order</h1>
            <div style={{height: '100%',width: '100%'}}>
                <div className='person-detail'>Name:<span >{value.name}</span></div>
                <div className='person-detail'>Address:<span>{value.address}</span></div>
                <div className='person-detail'>Ref ID:<span>{value.reference}</span></div>
                <div className='person-detail'>Status:<span >{value.delivered_status}</span></div>
                
                <div className='person-detail'>Tel:<span >{value.tel}</span></div>
                <div className='orderd-items'>
                   <ul style={{fontWeight:'bold'}}>
                       <span>Items</span>
                        <li className='items'><span>Name</span> <span>Quantity</span> <span>Cost</span></li>

                       <div>{list.map(item=>(

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
