import React from 'react'
import {Link} from 'react-router-dom'
import Login from '../../hooks/registration/login'


export default function SignIn() {
    
    const {SignIn,setGetLoginValues}=Login()
    
  
    const[user,setUser]= React.useState({email:'',password:''})
    const handleFormChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
        setGetLoginValues({ ...user, [event.target.name]: event.target.value });
    }
    
    
   
    const login=(e)=>{
        if(user.email.trim()===''||user.password.trim()===''){
            alert('please fill in the fields')
        }
        else{
        
        e.preventDefault()
            SignIn()
        

            // setLink('/location')
           
        }
        
    }
    
  
    return (
        <div className='page background' >
            
           
            <div className='reg-body'>

                <Link to='/' className='back reg-link'><i class=" fa-2x fas fa-arrow-left" style={{ width: '50px' }}></i></Link>
                <div className='intro'>
                      <h1 className='name'>
                          ọjà.com
                       </h1>
                       <p className='instruction'>
                            Sign in and shop now!
                       </p>
                </div>
                <form onSubmit={login}>
                    <input type='email' name='email' placeholder='E-mail' className='padding' onChange={handleFormChange}/>
               
                    <input type='password' name='password' placeholder='password' className='padding' onChange={handleFormChange}/>
                    <div>
                       <input id='checkbox' type='checkbox' name='checkbox' className='checkbox' />
                       <label for='checkbox' style={{marginLeft:'10px',fontWeight:'bold'}}>Remember me</label>

                    </div>
                    {/* <input type='submit' name='submit' onClick={nav} className='reset' /> */}
                    
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
