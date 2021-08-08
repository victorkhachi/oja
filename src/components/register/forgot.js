import React from 'react'

import { Link} from 'react-router-dom'
import Back from '../images/svg/Back'
import ForgotForm from './extra/forgotForm'
// import Reset from './hooks/registration/reset'


export default function Forgot() {
   
    
    return (
        <div className='page background'>

            <div className='reg-body'>


              <Link to='/signIn'  className='back reg-link'><Back /></Link>

              <div className='intro' style={{ width: '80%', textAlign: 'center' }}>
                  <h1 className='name' >
                      ọjà.com
                  </h1>
                  <p className='instruction'>
                          Forgot password? we'll send you a link to reset.
                  </p>
              </div>
              <ForgotForm />
                <div className='alt' style={{ textAlign: 'center', marginTop: '20%' }}>
                
                    <p>Already have an account? <Link to='/SignIn' style={{color: ' #A5060A',textDecoration: 'none'}}>Sign in</Link></p>
                

            </div>
        </div>
        <div className='cover'></div>
    </div >


    )
}
