import React, { useContext } from 'react'
import { StoreOtp } from '../../market/extras/userContext'
import OtpEnter from '../hooks/registration/otp'



export default function Otp() {
    const [typeOtp,setTypeOtp]=React.useState()
    const {otpMessage,otpInput}=OtpEnter()
    const {otp,setOtp}=useContext(StoreOtp)
    

    console.log(otp);
    const input =(e)=>{
        setTypeOtp(e.target.value)
    }
    React.useEffect(()=>setTypeOtp(),[])
    const send =(e)=>{
        console.log(typeOtp);
        e.preventDefault()
        otpInput(typeOtp)
    }
    return (
        <div className='page'>
            <form style={{marginTop:'25%',width:'70%', display:'flex',flexDirection:'column',alignItems:'center'}} onSubmit={send}>
                    <input name='otp' className='padding' placeholder='enter OTP' onChange={input} />
                    <div>{otpMessage}</div>
                    <button className='reset'>confirm</button>
            </form>
            
        </div>
    )
}
