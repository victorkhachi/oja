import React from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {

    return (
        <div className='page' style={{ backgroundColor: ' #E5E5E5;' }}>

            <div className='cover'>
            </div>
            <Link to='/signIn' style={{ position: 'absolute', width: '15%', height: '50px', margin: '20px 0px 0px 10px' }} className='back'>back</Link>

            <div className='intro' style={{ width: '80%', textAlign: 'center'}}>
                <h1 className='name' style={{ width: '20%', fontSize: '50px', textAlign: 'center', marginBottom: '0px',marginLeft:'20%' }}>
                    ọjà.com
                       </h1>
                <p className='instruction'>
                  Welcome! sign up and start shopping.
                       </p>
            </div>
            <form>
                <div style={{width:'100%',display:'flex',margin:'auto',justifyContent:'space-between'}}>
                    <input name='firstName' type='text' placeholder='First Name' className='padding' style={{width:'47%'}}/>
                    <input name='lastName' type='text' placeholder='last Name' className='padding' style={{ width: '47%' }}/>

                </div>
                <input type='email' name='email' placeholder='E-mail' className='padding'/>
                <input type='number' name='mobile' placeholder='mobile' className='padding' />
                <input type='password' name='password' placeholder='password' className='padding' />
                <button style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    padding: '10px',
                    background: '#A5060A',
                    borderRadius: '10px',
                    width: '100%',
                    marginTop: '15%'
                }}>
                    Sign up
                    </button>

            </form>
            <div className='alt' style={{ textAlign: 'center', marginTop: '20%' }}>
                <p>Already have an account? <Link to='/signIn' style={{
                    color: ' #A5060A',
                    textDecoration: 'none'
                }}>Sign in</Link></p>
                <p>Forgot password? <Link to='/forgotPassword' style={{ color: '#A5060A', textDecoration: 'none' }}> Reset</Link></p>
            </div>
        </div>
    )
}
