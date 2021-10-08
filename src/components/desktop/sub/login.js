import React from 'react'
import SignInForm from '../.././register/extra/signInform'
import SignUpForm from '../.././register/extra/signUpform'


export default function Login(props) {
    const [inDisplay,setInDisplay]= React.useState()
    const [upDisplay, setUpDisplay] = React.useState('none')
    const [inColor, setInColor] = React.useState('grey')
    const [upColor, setUpColor] = React.useState('white')


    const click=(e)=>{
         if(e.target.className==='in'){
             setInDisplay('inline-block')
             setUpDisplay('none')
             setUpColor('white')
             setInColor('grey')

         }
         else{
             
             setInDisplay('none')
             setUpDisplay('inline-block')
             setUpColor('grey')
             setInColor('white')

             
         }
    }
    return (
        <div className='login-box' style={{display:`${props.display}`}}>
            <div style={{display:'flex',height:'10%',width:'100%',justifyContent:'space-between',fontWeight:'bold'}}>
                <div onClick={click}  className='in'style={{padding:'3%',background:`${inColor}`,width:'50%'}}>Sign In</div>
                <div onClick={click} className='up' style={{ padding: '3%', background: `${upColor}`, width: '50%' }}>Sign Up</div>

            </div>
            <div>
                <div style={{display:`${inDisplay}`,width:'100%'}}><SignInForm /></div>
                
                <div style={{display:`${upDisplay}`}}> <SignUpForm /></div>
            </div>
        </div>
    )
}
