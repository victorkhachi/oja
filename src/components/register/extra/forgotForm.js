import React from 'react'
import { Link } from 'react-router-dom'
import Reset from '../hooks/registration/reset' 
export default function ForgotForm(){
    const { PassReset, setGetEmail, message,display } = Reset()
    const [email, setEmail] = React.useState({ email: '' })
    const enterMail = (e) => {
        setEmail({ email: e.target.value })
        setGetEmail({ email: email.email })


    }
    React.useEffect(() => setGetEmail({ email: email.email }), [email.email])
    const reset = async () => {
         setGetEmail({ email: email.email })


        if (email.email.trim() !== '')
            PassReset()
    }
    

    return(
              <form  onSubmit={(e)=>{
                      e.preventDefault()
                       reset()}} style={{marginTop:'20%'}}>
                    <div style={{ fontSize: '0.8rem', textAlign: 'center', color: '#A5060A' }}>{message}</div>
                    <input type='email' name='email' placeholder='E-mail' className='padding' onChange={enterMail} />
                
                     <button className='reset'>
                         Reset password
                     </button>
            <Link style={{ color:'#A5060A',fontWeight:'bold',width:'100%',textAlign:'center',marginTop:'2%',display:`${display}`}} to='/OTP'>Click to enter OTP</Link>

             </form>
    )

}
