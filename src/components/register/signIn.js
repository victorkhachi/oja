import React from 'react'
import {Link} from 'react-router-dom'


export default function SignIn() {
  
    return (
        <div className='page background' >
            
           
            <div className='reg-body'>

                <Link to='/' className='back reg-link'><i class=" fa-2x fas fa-arrow-left" style={{ width: '50px' }}></i></Link>
                <div className='intro'>
                      <h1 className='name'style={{width:'20%',fontSize:'50px',textAlign:'center' , marginBottom:'0px'}}>
                          ọjà.com
                       </h1>
                       <p className='instruction'>
                            Sign in and shop now!
                       </p>
                </div>
                <form>
                    <input type='email' name='e-mail' placeholder='E-mail' className='padding'/>
               
                    <input type='password' name='password' placeholder='password' className='padding' />
                    <div>
                       <input id='checkbox' type='checkbox' name='checkbox' className='checkbox' />
                       <label for='checkbox' style={{marginLeft:'10px',fontWeight:'bold'}}>Remember me</label>

                    </div>
                   <button className='reset'>
                        Sign in
                    </button>
                </form>
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
