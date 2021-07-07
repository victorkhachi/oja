import React from 'react'
import Login from '../hooks/registration/login'

export default function SignInForm() {
    const {SignIn, SetGetLoginValues}=Login()


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
    return (
        <div>       
             <form onSubmit={login}>
               <input type='email' name='email' placeholder='E-mail' className='padding' onChange={handleFormChange} />

               <input type='password' name='password' placeholder='password' className='padding' onChange={handleFormChange} />
               <div>
                  <input id='checkbox' type='checkbox' name='checkbox' className='checkbox' />
                  <label for='checkbox' style={{ marginLeft: '10px', fontWeight: 'bold' }}>Remember me</label>

            </div>
            {/* <input type='submit' name='submit' onClick={nav} className='reset' /> */}

            <button className='reset'>
                Sign in
                    </button>

        </form>
        </div>

            
        
    )
}
