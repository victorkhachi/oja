import React from 'react'
import {Link} from 'react-router-dom'
import Back from '../images/svg/Back'
import SignInform from './extra/signInform'

export default function SignIn() {
    
    
    
  
    return (
        <div className='page background' >
            
           
            <div className='reg-body'>

                <Link to='/' className='back reg-link'><Back /></Link>
                <div className='intro'>
                      <h1 className='name'>
                          ọjà.com
                       </h1>
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
