import React, { useContext } from 'react'
import { Total } from './userContext'

export default function Bill() {
    const {total, setTotal}=useContext(Total)
    return (
        <div className='bill'>
        <div className='order'>
                <div className='order-heading'>
                    <div style={{ marginLeft: '10%' }}>Order Summary:</div>
                    <div style={{marginRight:'10%'}}>{`N${total}`}</div>
                </div>
                <div className='bill-row'></div>
                <div className='bill-row'></div>

            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around',height:'15%',alignItems:'center',marginTop:'5%' }}>
                <div style={{
                    background: '#D4AF37', marginLeft: '3%' }} className='order-nav'>
                    Continue shopping</div>
                <div style={{ background: '#A5060A', marginRight: '3%' }} className='order-nav'>
                    Checkout
                        </div>

            </div>
        </div>
    )
}
