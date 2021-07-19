import React, {useContext} from 'react'
import CartList from './cartList'
import Bill from './bill'
import { UserContext } from './userContext'
import { Link } from 'react-router-dom'
import Notes from '../../images/notes.png'

export default function Step1() {
    const {value, setValue}=useContext(UserContext)
    const pickedItems = value;
    const items =value.length
    return (
        <div style={{width:'100%',height:'100%'}}>
            <div style={{ height: '60%', width: '100%', background: 'white', overflowY: 'scroll' }}>
                <div style={{color:'white', height: '60px', width: '100%', background: '#55DB52', zIndex: '50' }}>
                    <div style={{width:'30%',marginLeft:'5%',fontWeight:'bold'}}>
                        <div>My cart</div>
                        {items} items
                    </div>
                </div>
                <div style={{ display: 'flex', width: '99%', justifyContent: 'space-between', flexBasis: '45%',flexWrap:'wrap', margin: 'auto', position: 'relative', marginTop: '2%' }}>
                    {
                        pickedItems.map((pickedItems, idx) => (
                            <CartList key={idx} data={pickedItems} />
                        ))
                    }
                   
                </div>
            </div>
            <Link to='/note' className='noteLink'>
                <img style={{width:'100%'}} src={Notes} alt=''/>
                <div>Note</div>
            </Link>
            <div style={{height:'40%'}}>
                <Bill />
            </div>
        </div>
    )
}
