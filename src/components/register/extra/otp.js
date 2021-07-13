import React from 'react'

export default function Otp() {
    return (
        <div className='page'>
            <form style={{marginTop:'25%',width:'70%', display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <input className='padding' placeholder='enter OTP' />
                    <button className='reset'>confirm</button>
            </form>
            
        </div>
    )
}
