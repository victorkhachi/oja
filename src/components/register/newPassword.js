
import React,{useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom'
import OtpEnter from './hooks/registration/otp'

export default function NewPassword() {
    const {newPassword,setUser,user,redirect}=OtpEnter()
    const [passwords,setPasswords]=useState({email:'',password1:'',password2:''})
    const enterPassword=(e)=>{
        setPasswords({...passwords,[e.target.name]:e.target.value})
        setUser({email:passwords.email,password:passwords.password1})
        
    }
    useEffect(() => setUser(), [])

    const reset=(e)=>{
        e.preventDefault()
        if(passwords.password1===passwords.password2){ 
            if(passwords.password1.trim()!==''){
            setUser({...user,email:passwords.email,password:passwords.password1})
            newPassword()
            }
        }
    }
    if(redirect){
        
       return <Redirect to='/signIn' />
    }



    return (
        <div className='page'>
            <form style={{width:'70%',margin:'auto',marginTop:'25%'}} onSubmit={reset}>
                <input className='padding' type='email' name='email' placeholder='Enter mail' onChange={enterPassword} />
                <input className='padding' type='password' name='password1' placeholder='Enter new password' onChange={enterPassword} pattern='(?=.*[a-z])(?=.*[A-Z]).{6,}' title='password must contain a capital letter and must be at least 6 letters ' />
                <input className='padding' type='password' name='password2' placeholder='confirm new password' onChange={enterPassword}/>
                <button className='reset'>Reset</button>
            </form>
            
        </div>
    )
}
