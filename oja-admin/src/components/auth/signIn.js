import axios from 'axios';
import React, {  useRef, useState } from 'react'
import back from '../img/back.png'
import './signIn.css'
import config from '../config';
import { Link } from 'react-router-dom';

export default function SignIn() {

 const refLink= useRef(null)
  const {url}=config
  const [getLoginValues, SetGetLoginValues] = useState({ email: '', password: '' });

  const login = async () => {
    try {
      const { status, data } = await axios.post(`${url}user/login`, JSON.stringify(getLoginValues), {
        headers: {
          "content-type": "application/json"
        }
      });
      
      localStorage.setItem('token', data.token)
      refLink.current.click()
      
    } catch (error) {

  
    }
  }
  
    return (
        <div className='sign-in'>
        <div className='a'><Link to='/dashboard' ref={refLink}></Link></div>

            <img src={back} alt=''  />
            <div className='sign-in-container'>
                 <div className='sign-in-head' >
                    <p> <span >ADMIN</span>Login</p>
                  </div>
                  <form onSubmit={(e)=>{
                    e.preventDefault()
                    if(getLoginValues.email !== ''&& getLoginValues.password!=='' ){
                    console.log(getLoginValues);
                    login()}
                    else alert('fields cant be empty')}} >
                    <input type='email' name='email' placeholder='Enter Email' onChange={(e)=>SetGetLoginValues({...getLoginValues,email:e.target.value})} />
                   <input type='password' name='password' placeholder='Enter Password' onChange={(e) => SetGetLoginValues({ ...getLoginValues, password: e.target.value })} />
                    <button >Sign in</button>
                  </form>
            </div>
        </div>
    )
}
