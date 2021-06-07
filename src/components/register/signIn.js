import React from 'react'
import {Link} from 'react-router-dom'


export default function SignIn() {
  
    return (
        <div className='page' style={{ backgroundColor:' #E5E5E5;'}}>
            
           
            <div style={{zIndex:'400',position: 'absolute',width: '100%'}}>
                <Link to='/' style={{ position: 'absolute', width: '15%', height: '50px', margin: '15% 0px 0px 5%' }} className='back'><i class="fas fa-arrow-left" style={{ width: '50px' }}></i></Link>
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
                <button  style={{
                    color:'white',
                    fontWeight:'bold',
                    fontSize:'20px',
                    padding:'10px',
                    background: '#A5060A',
                    borderRadius: '10px',
                    width:'100%',
                    marginTop:'15%'
                    }}>
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
