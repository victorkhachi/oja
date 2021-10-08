import React from 'react'
import {Link} from 'react-router-dom'
import Back from '../images/svg/Back'
import Logo from '../market/pages/logo'
import SignInform from './extra/signInform'

export default function SignIn() {
    
    
    
  
    return (
        <div className='page background' >
            
           
            <div className='reg-body'>
             <div className='sign_in_head'>
                    <div className='top'>
                       <Link to='/' className='back reg-link'>
                            <Back />
                       </Link>
                       <Logo />
                    </div>

                       <p className='instruction'>
                            Sign in and shop now!
                       </p>
            </div>
                 <SignInform />
                 
                 <div className='alt' style={{textAlign:'center', marginTop:'20%'}}>
                  <p>Don’t have an account? <Link to='/signUp' style={{
                      color: ' #A5060A',
                      textDecoration:'none',
                    zIndex: '500'}}>Sign Up</Link></p>
                  <p>Forgot password? <Link to='/forgotPassword' style={{ zIndex:'500',color: '#A5060A', textDecoration: 'none'}}> Reset</Link></p>
            </div>
            </div>
           <div className='cover'>
            </div>
        </div>
    )
}
