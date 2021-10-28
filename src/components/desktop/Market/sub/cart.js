import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Bill from '../../../market/cart/payment/bill'
import CartList from '../../../market/cart/cartList'
import {  UserContext } from '../../../market/extras/userContext'
import Note from '../../../images/svg/Note'

export default function Cart2() {
      const {value , setValue}=useContext(UserContext)
      

    return (
        <div style={{  height: '100%',boxshadow:'0px 4px 4px 0px #00000040',padding:'2%',background:'white'}}>
            <div style={{fontSize: '15px', textTransform: 'uppercase', color:' #A5060A',fontWeight:'bold',marginLeft:'2%',display:'flex', alignItems:'center'}}>my cart</div>
            <div style={{ width: '99%',height:'60%',overflowY:'scroll',margin: 'auto', position: 'relative', marginTop: '2%' }}>
                {
                    value.map((pickedItems, idx) => (
                        <CartList key={idx} data={pickedItems} />
                    ))
                }
                <Link to='/note' style={{
                     textDecoration: 'none', width: '5%', padding: '2%', position: 'fixed', top: '57%', right:'3%'
                }}>
                    <Note />
                </Link>
            </div>
            
            
        
                <Bill display='none' />
        </div>
           
           
        
    
        
    )
}
