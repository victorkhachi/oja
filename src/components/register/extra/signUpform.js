import React from 'react'
import useRegistration from '../hooks/registration'


export default function SignUpForm() {
    const [formValues, setFormValues] = React.useState({ first_name: '', last_name: '', email: '', tel: '', password: '' })
    const { register, setGetFormValues } = useRegistration();

    const click = () => { console.log() }



    const handleFormChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });

        setGetFormValues({ ...formValues, [event.target.name]: event.target.value });
    }
    const validate = (e) => {
        if (formValues.first_name.trim() === '' || formValues.last_name.trim() === '' || formValues.email.trim() === '' || formValues.tel.trim() === '' || formValues.password.trim() === '') {
            e.preventDefault()
            alert('please fill all feilds and try again.');
        }
        else {

            e.preventDefault()
            register()



        }
    }



    return (
        <form onSubmit={validate}>
            <div style={{ width: '100%', display: 'flex', margin: 'auto', justifyContent: 'space-between' }}>
                <input name='first_name' type='text' onChange={handleFormChange} value={formValues.first_name} placeholder='First Name' className='padding' style={{ width: '47%' }} />
                <input name='last_name' type='text' placeholder='last Name' onChange={handleFormChange} value={formValues.last_name} className='padding' style={{ width: '47%' }} />

            </div>
            <input type='email' name='email' placeholder='E-mail' className='padding' onChange={handleFormChange} value={formValues.email} />
            <input type='number' name='tel' placeholder='mobile' className='padding' onChange={handleFormChange} value={formValues.tel} />
            <input type='password' name='password' placeholder='password' className='padding' onChange={handleFormChange} value={formValues.password} pattern='(?=.*[a-z])(?=.*[A-Z]).{6,}' title='password must contain a capital letter and must be at least 6 letters ' />
            <button className='reg-button ' onClick={click}>
                Sign up
                    </button>

        </form>
    )
}
