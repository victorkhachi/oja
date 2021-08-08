import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Bill from '../../../market/cart/payment/bill'
import CartList from '../../../market/cart/cartList'
import {  UserContext } from '../../../market/extras/userContext'

export default function Cart2() {
      const {value , setValue}=useContext(UserContext)
      

    return (
        <div style={{ width: '100%', height: '500px', overflowY: 'scroll',boxshadow:'0px 4px 4px 0px #00000040',padding:'2%',background:'white'}}>
            <div style={{fontSize: '15px', textTransform: 'uppercase', color:' #A5060A',fontWeight:'bold',marginLeft:'2%',display:'flex', alignItems:'center'}}>my cart</div>
            <div style={{ display: 'flex', width: '99%', justifyContent: 'space-between', flexBasis: '45%', flexWrap: 'wrap', margin: 'auto', position: 'relative', marginTop: '2%' }}>
                {
                    value.map((pickedItems, idx) => (
                        <CartList key={idx} data={pickedItems} />
                    ))
                }
                <Link to='/note' style={{
                    left: '30%', textDecoration: 'none', width: '20%', padding: '2%', position: 'relative', top: '20%', fontWeight: 'bold', background: '#A5060A', borderRadius: '5px', boxShadow: 'inherit', margin: 'auto', marginBottom: '2%;'
                }}>
                    Notes
                </Link>
            </div>
            
            
            <div style={{position:'relative'}}>
                <Bill display='none' />
            </div>
        </div>
           
           
        
    
        
    )
}
