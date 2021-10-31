import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Login from '../hooks/registration/login'

export default function SignInForm() {
    const {SignIn, SetGetLoginValues,error,redirect,order}=Login()


    const [user, setUser] = React.useState({ email: '', password: '' })
    const handleFormChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
        SetGetLoginValues({ ...user, [event.target.name]: event.target.value });
    }



    const login = (e) => {
        if (user.email.trim() === '' || user.password.trim() === '') {
            alert('please fill in the fields')
        }
        else {

            e.preventDefault()
            SignIn()

        }
    }

    if(redirect){
        return <Redirect to='/location' />
    }
    return (
        <div>       
             <form onSubmit={login}>
               <input type='email' name='email' placeholder='E-mail' className='padding' onChange={handleFormChange} />
                <div style={{ fontSize: '0.8rem', textAlign: 'center', color:'#A5060A'}}>{error}</div>

               <input type='password' name='password' placeholder='password' className='padding' onChange={handleFormChange} />
                

            <button className='reset'>
                Sign in
                    </button>

        </form>
            <p className='forgot-p'>Forgot password? <Link to='/forgotPassword' style={{ zIndex: '500', color: '#A5060A', textDecoration: 'none' }}> Reset</Link></p>

        </div>

            
        
    )
}
