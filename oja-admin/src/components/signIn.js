import React from 'react'
import back from './img/back.png'

export default function SignIn() {
    return (
        <div style={{width:'100%',height:'800px'}}>
            <img src={back} alt='' style={{width:'100%',height:'100%'}} />
            <div style={{position:'absolute',width:'30%',height:'200px',top:'30%',left:'30%',background:'white',padding:'5%'}}>
                  <div style={{textAlign:'center',width:'70%',margin:'auto',display:'flex',justifyContent:'center'}}>
                    <p> <span style={{fontWeight:'bold',color:'#a5060a', marginRight:'3px'}}>ADMIN</span>Login</p>
                  </div>
                  <form style={{display:'flex',flexDirection:'column',height:'70%',justifyContent:'space-between',alignItems:'center'}}>
                    <input type='password' name='password' placeholder='Enter Password' style={{ border: '2px solid #A5060A',padding:'2%',width:'100%'}} />
                    <button style={{width: '80%', background: '#A5060A',color:'white',fontWeight:'bold',padding:'5px',borderRadius:'3px'}}>Sign in</button>
                  </form>
            </div>
        </div>
    )
}
