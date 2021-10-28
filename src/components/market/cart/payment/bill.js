import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GetOrder from '../../extras/Order'
import { Order, Total, UserContext } from '../../extras/userContext'

export default function Bill(props) {
    const {total, setTotal}= useContext(Total)
    const {order ,setOrder}=useContext(Order)
    const {value, setValue}=useContext(UserContext)
    // const {TakeOrder}=GetOrder()
    const name=localStorage.getItem('name')
    const tel=localStorage.getItem('tel')
      console.log(value)
     const zone = localStorage.getItem('zone')
     const address = localStorage.getItem('address')
   
    const addList = value.map(item =>{
        return {name:item.name ,quantity:`${item.quantity}${item.unit}`,cost:item.cost}
        
    }
           
       )
   

    const Weight = value.map(items=>{
        return items.quantity * items.weight
    })
    let totalWeight=0;
    for (let i = 0; i < Weight.length; i++) {
            totalWeight=totalWeight +Weight[i]
    }
    const [fee,setFee]=useState(0)
     useEffect(()=>{
         if (totalWeight>0 && totalWeight<11) {
             setFee(500)
         }
         if (totalWeight>10 && totalWeight<21) {
             setFee(1000)
         }
         if (totalWeight > 20) {
             setFee(1500)
         }
     },[totalWeight])
     let transaction =fee + total;
    const done = async () => {
        setOrder({ ...order, list: JSON.stringify(addList), total_price: transaction, name: name, tel: tel, zone: zone, address: address })
        
    }

    return (
        <div className='bill'>
        <div className='order'>
                <div className='order-heading'>
                    <div style={{ marginLeft: '10%' }}>Order Summary:</div>
                    <div style={{marginRight:'10%'}}>{`N${total}`}</div>
                </div>
                <div className='bill-row'>Service fee and shipping:  N{fee}</div>
                <div className='bill-row'>total:{transaction}</div>

            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around',height:'15%',alignItems:'center',marginTop:'5%' }}>
                <Link to='/items' style={{
                    background: '#D4AF37', marginLeft: '3%', display:`${props.display}` }} className='order-nav'>
                    Continue shopping</Link>
                <Link to="/payment" onClick={done} style={{ background: '#A5060A', marginRight: '3%' }} className='order-nav'>
                    Checkout
                        </Link>

            </div>
        </div>
    )
}
