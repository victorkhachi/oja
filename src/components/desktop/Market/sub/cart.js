import React, { useContext } from 'react'
import CartList from '../../../market/extras/cartList'
import { Total, UserContext } from '../../../market/extras/userContext'

export default function Cart2() {
      const {value , setValue}=useContext(UserContext)
      const {total ,setTotal}=useContext(Total)

    return (
        <div style={{ width: '100%', height: '500px', overflowY: 'scroll',boxshadow:'0px 4px 4px 0px #00000040'}}>
            <div style={{fontSize: '15px', textTransform: 'uppercase', color:' #A5060A',fontWeight:'bold',marginLeft:'2%',display:'flex', alignItems:'center'}}>my cart</div>
            <div style={{ display: 'flex', width: '99%', justifyContent: 'space-between', flexBasis: '45%', flexWrap: 'wrap', margin: 'auto', position: 'relative', marginTop: '2%' }}>
                {
                    value.map((pickedItems, idx) => (
                        <CartList key={idx} data={pickedItems} />
                    ))
                }

            </div>
            <div style={{
                width: '20%', padding: '2%', fontWeight: 'bold', background:'#A5060A',borderRadius:'5px',boxShadow:'inherit',margin:'auto',marginBottom:'2%;'}}>
                Notes
            </div>
            <div style={{marginLeft:'30%',fontWeight:'bolder'}}>
                Total:{`N${total}`}
            </div>
        </div>
           
           
        
    
        
    )
}
