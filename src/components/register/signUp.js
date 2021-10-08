import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../images/svg/Back'
import Logo from '../market/pages/logo'
import SignUpForm from './extra/signUpform'



export default function SignUp() {
     

        return (
        <div className='page background'>
            <div className='reg-body' >
                    <div className='sign_in_head'>
                        <div className='top'>
                            <Link to='/signIn' className='back reg-link'>
                                <Back />
                            </Link>
                            <Logo />
                        </div>
                  <p className='instruction'>
                      Welcome! sign up and start shopping.
                  </p>
            </div>
            <SignUpForm />
            <div className='alt' style={{ textAlign: 'center', marginTop: '10%' }}>
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
