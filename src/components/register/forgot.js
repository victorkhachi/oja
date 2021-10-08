import React from 'react'

import { Link} from 'react-router-dom'
import Back from '../images/svg/Back'
import Logo from '../market/pages/logo'
import ForgotForm from './extra/forgotForm'
// import Reset from './hooks/registration/reset'


export default function Forgot() {
   
    
    return (
        <div className='page background'>
            
            <div className='reg-body'>
            <div className='sign_in_head'>
                <div className='top'>
                    <Link to='/signIn' className='back reg-link'>
                        <Back />
                    </Link>
                    <Logo />
                </div>
                  <p className='instruction'>
                          Forgot password? we'll send you a link to reset.
                  </p>
              </div>
              <ForgotForm />
                <div className='alt' style={{ textAlign: 'center', marginTop: '10%' }}>
                
                    <p>Already have an account? <Link to='/SignIn' style={{color: ' #A5060A',textDecoration: 'none'}}>Sign in</Link></p>
                

            </div>
        </div>
        <div className='cover'></div>
    </div >


    )
}
