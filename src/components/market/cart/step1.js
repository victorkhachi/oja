import React, {useContext} from 'react'
import CartList from './cartList'
import Bill from './payment/bill'
import { UserContext } from '../extras/userContext'
import { Link } from 'react-router-dom'
import Note from '../../images/svg/Note'

export default function Step1() {
    const {value, setValue}=useContext(UserContext)
    
    const items =value.length
    return (
        <div style={{width:'100%',height:'100%'}}>
            <div style={{ height: '50%', width: '100%', background: 'white', overflowY: 'scroll' }}>
                <div className='cart-head'>
                    <div style={{width:'30%'}}>
                        <div>My cart</div>
                        {items} items
                    </div>
                </div>
                <div style={{ display: 'flex', width: '99%', justifyContent: 'space-between', flexBasis: '45%',flexWrap:'wrap', margin: 'auto', position: 'relative', marginTop: '2%' }}>
                    {
                        value.map((pickedItems, idx) => (
                            <CartList key={idx} data={pickedItems} />
                        ))
                    }
                   
                </div>
            </div>
            <Link to='/note' className='noteLink'>
                <Note />
            </Link>
            <div style={{height:'50%'}}>
                <Bill />
            </div>
        </div>
    )
}
