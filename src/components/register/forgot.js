import React from 'react'
import { Link} from 'react-router-dom'


export default function Forgot() {

    return (
        <div className='page' style={{ backgroundColor: ' #E5E5E5;' }}>

            <div style={{ zIndex: '400', position: 'absolute', width: '100%' }}>

            <Link to='/signIn' style={{
                position: 'absolute', width: '15%', height: '50px', margin: '15 % 0px 0px 5%' }} className='back'><i class="fas fa-arrow-left" style={{ width: '50px' }}></i></Link>

            <div className='intro' style={{ width: '80%', textAlign: 'center' }}>
                <h1 className='name' style={{ width: '20%', fontSize: '50px', textAlign: 'center', marginBottom: '0px', marginLeft: '20%' }}>
                    ọjà.com
                       </h1>
                <p className='instruction'>
                    Forgot password? we'll send you a link to reset.
                       </p>
            </div>
            <form style={{marginTop:'20%'}}>
                
                <input type='email' name='email' placeholder='E-mail' className='padding' />
                
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
                    Reset password
                    </button>

            </form>
            <div className='alt' style={{ textAlign: 'center', marginTop: '20%' }}>
                
                    <p>Already have an account? <Link to='/SignIn' style={{
                    color: ' #A5060A',
                    textDecoration: 'none'
                }}>Sign in</Link></p>
                

            </div>
        </div>
        <div className='cover'>
        </div>
        </div >


    )
}
