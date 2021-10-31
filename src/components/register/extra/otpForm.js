import React, {useContext, useEffect, useRef, useState} from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { StoreOtp } from '../../market/extras/userContext'
import OtpEnter from '../hooks/registration/otp'

export default function OtpForm() {
    const [typeOtp, setTypeOtp] = useState()
    
    const { otp, setOtp } = useContext(StoreOtp)
    const [otpMessage, setOtpMessage] = useState('')
    const passRef = useRef(null)

  

    const send = (e) => {
        
        e.preventDefault()
        if (otp === typeOtp) {
          passRef.current.click()
            
        }
        else {
            setOtpMessage('wrong token entered')
        }
    }
    return (
        <div>
            <form style={{ marginTop: '25%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={send}>
                <input name='otp' className='padding' placeholder='enter OTP' onChange={(e)=>setTypeOtp(e.target.value)} />
                <div>{otpMessage}</div>
                <button className='reset'>confirm</button>
                <Link ref={passRef} to='password'></Link>
            </form>
        </div>
    )
}
