import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../images/svg/Back'
import SignUpForm from './extra/signUpform'



export default function SignUp() {
     

        return (
        <div className='page background'>
            <div className='reg-body' >

            
               <Link to='/signIn' className='back reg-link'><Back /></Link>

               <div className='intro' style={{ width: '80%', textAlign: 'center'}}>
                  <h1 className='name' >
                    ọjà.com
                  </h1>
                  <p className='instruction'>
                      Welcome! sign up and start shopping.
                  </p>
            </div>
            <SignUpForm />
            <div className='alt' style={{ textAlign: 'center', marginTop: '20%' }}>
                <p>Already have an account? <Link to='/signIn' style={{
                    color: ' #A5060A',
                    textDecoration: 'none'
                }}>Sign in</Link></p>
                <p>Forgot password? <Link to='/forgotPassword' style={{ color: '#A5060A', textDecoration: 'none' }}> Reset</Link></p>
            </div>
            </div>
             <div className='cover'>
             </div>
        </div>

    )
}
