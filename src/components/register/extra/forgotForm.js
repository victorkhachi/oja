import React from 'react'
import {  Redirect } from 'react-router-dom'
import Reset from '../hooks/registration/reset' 
export default function ForgotForm(){
    const { PassReset, message,redirect } = Reset()
    const [email, setEmail] = React.useState({ email: '' })
    
        
    
    
    const reset = async () => {
        //  setGetEmail({ email: email.email })

        if (email.email.trim() !== '')
            PassReset(email)
    }
    if (redirect) {
        return <Redirect to='/OTP' />
    }
    

    return(
              <form  onSubmit={(e)=>{
                      e.preventDefault()
                       reset()}} style={{marginTop:'10%'}}>
                    <div style={{ fontSize: '0.8rem', textAlign: 'center', color: '#A5060A' }}>{message}</div>
            <input type='email' name='email' placeholder='E-mail' className='padding' onChange={(e)=>setEmail({ email: e.target.value })} />
                
                     <button className='reset'>
                         Reset password
                     </button>

             </form>
    )

}
