import React, { useEffect } from 'react'
import SignInForm from '../.././register/extra/signInform'
import SignUpForm from '../.././register/extra/signUpform'
import ForgotForm from '../.././register/extra/forgotForm'
import { Link } from 'react-router-dom'
import OtpForm from '../../register/extra/otpForm'
// import NewPassword from '../../register/newPassword'
import PassForm from '../../register/extra/passForm'



export default function Login(props) {
    const [inDisplay,setInDisplay]= React.useState()
    const [ForgotDisplay, setForgotDisplay] = React.useState('none')
    const [otpDisplay, setOtpDisplay] = React.useState('none')
    const [passwordDisplay, setPasswordDisplay] = React.useState('none')


    const [upDisplay, setUpDisplay] = React.useState('none')
    const [inColor, setInColor] = React.useState('grey')
    const [upColor, setUpColor] = React.useState('white')


    const click=(e)=>{
         if(e.target.className==='in'){
             setInDisplay('inline-block')
             setUpDisplay('none')
             setUpColor('white')
             setInColor('grey')
             setForgotDisplay('none')
            setOtpDisplay('none')
             setPasswordDisplay('none')

         }
         else{
             
             setInDisplay('none')
             setUpDisplay('inline-block')
             setUpColor('grey')
             setInColor('white')
             setForgotDisplay('none')
             setOtpDisplay('none')
             setPasswordDisplay('none')

         }
    }
   useEffect(()=>{
       if (props.number === '3') {
           setForgotDisplay('inline-block')
           setInDisplay('none')
           setUpDisplay('none')
       }
       if (props.number === '4') {
           setForgotDisplay('none')
           setOtpDisplay('inline-block')

           setInDisplay('none')
           setUpDisplay('none')
       }
       if (props.number === '5') {
           setForgotDisplay('none')
           setOtpDisplay('none')
           setPasswordDisplay('inline-block')

           setInDisplay('none')
           setUpDisplay('none')
       }

       
   },[props.number])
    
    return (
        <div className='login-box' style={{display:`${props.display}`}}>
            <div style={{display:'flex',height:'10%',width:'100%',justifyContent:'space-between',fontWeight:'bold'}}>
                <Link to='/signIn' onClick={click}  className='in'style={{padding:'3%',background:`${inColor}`,width:'50%'}}>Sign In</Link>
                <Link to='/signUp' onClick={click} className='up' style={{ padding: '3%', background: `${upColor}`, width: '50%' }}>Sign Up</Link>

            </div>
            <div>
                <div style={{display:`${inDisplay}`,width:'100%'}}><SignInForm /></div>
                
                <div style={{display:`${upDisplay}`}}> <SignUpForm /></div>
                <div style={{ display: `${ForgotDisplay}` }}> <ForgotForm /></div>
                <div style={{ display: `${otpDisplay}` }}> <OtpForm /> </div>
                <div style={{ display: `${passwordDisplay}` }}> <PassForm/> </div>

                

            </div>

        </div>
    )
}
