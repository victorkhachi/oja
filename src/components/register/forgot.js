import React from 'react'
import { Link} from 'react-router-dom'
import Reset from './hooks/registration/reset'


export default function Forgot() {
    const {PassReset,setGetEmail}=Reset()
    const [email,setEmail]=React.useState({email:''})
    const enterMail =(e)=>{
        setEmail({email:e.target.value})
        setGetEmail({email:email})

    }
    const reset=(e)=>{
        e.preventDefault()
      if(email.email.trim() !=='')
      PassReset()
    }

    return (
        <div className='page background'>

            <div className='reg-body'>


              <Link to='/signIn'  className='back reg-link'><i class=" fa-2x fas fa-arrow-left" style={{ width: '50px' }}></i></Link>

              <div className='intro' style={{ width: '80%', textAlign: 'center' }}>
                  <h1 className='name' style={{ width: '20%', fontSize: '50px', textAlign: 'center', marginBottom: '0px', marginLeft: '20%' }}>
                      ọjà.com
                  </h1>
                  <p className='instruction'>
                          Forgot password? we'll send you a link to reset.
                  </p>
              </div>
              <form  onSubmit={reset} style={{marginTop:'20%'}}>
                
                    <input type='email' name='email' placeholder='E-mail' className='padding' onChange={enterMail} />
                
                     <button className='reset'>
                         Reset password
                     </button>

                </form>
                <div className='alt' style={{ textAlign: 'center', marginTop: '20%' }}>
                
                    <p>Already have an account? <Link to='/SignIn' style={{color: ' #A5060A',textDecoration: 'none'}}>Sign in</Link></p>
                

            </div>
        </div>
        <div className='cover'></div>
    </div >


    )
}
