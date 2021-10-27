import React, { useContext,useState,useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Order } from '../../market/extras/userContext'

export default function Middle() {
   const {order, setOrder}=useContext(Order)
    const [address, setAddress] = useState({ region: '', address: '' })
    const [message, setMessage] = useState('')
    const [redirect, setRedirect] = useState(false)
    const location = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value })
    }

    const enterMarket = async (e) => {
         e.preventDefault()
        if (address.region.trim() !== '' && address.address.trim() !== '') {
            setOrder({ ...order, zone: address.region, address: address.address })
            setRedirect(true)
            console.log(order);

        }
        else {
            setMessage('please enter a valid location')
        }
    }
    useEffect(() => setRedirect(), [order])
    if (redirect) {
        return <Redirect to='/market' />
    }
    

    return (
        <div className='middle'>
            <div className='middle-grad'>
              <div style={{width:'80%',marginLeft:'5%'}}>
                    Shop now and get a speedy delivery at your doorstep
              </div>
                
                 <form onSubmit={enterMarket} style={{width:'100%',marginTop:'0',display:'flex',flexDirection:'column'}}>
                    <select className='selected' name='region' type='text' onChange={location}>
                        <option disabled selected hidden>pick region</option>
                        <option value='lekki phase 2'>Island(lekki phase 1)</option>
                        <option value='ikeja/magodo'>Ikeja/Magodo</option>
                        <option value='Unilag'>Unilag</option>
                        <option value='lekki phase 2'>Island (lekki phase 2)</option>

                    </select>

                    <input type='text' name='address' onChange={location}  placeholder='Enter delivery address'/>
                    <button  className='reset' style={{marginTop:'3%',width:'20%', marginLeft:'5%',padding:'1%'}}>
                          Send me!
                    </button>
                </form>
            </div>
            
        </div>
    )
}
