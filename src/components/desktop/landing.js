import React, { useContext } from 'react'
import Top from './sub/top'
import Middle from './sub/middle' 
import Login from './sub/login'
import Bottom from './sub/bottom'
import Help from './sub/help'


export default function Landing(props) {
  const [display,setDisplay]= React.useState('none')
  const [blurDisplay, setBlurDisplay] = React.useState('none')
  const [help, setHelp] = React.useState('none')

  const close=()=>{
    if(blurDisplay==='inline-block'){
      setDisplay('none')
      setBlurDisplay('none')
      setHelp('none')
      }
      
    else {
      if(display==='none'){
      setDisplay('inline-block')
      setBlurDisplay('inline-block')}
    }
  }
  const click =()=>{
    setHelp('inline-block')
    setBlurDisplay('inline-block')
  }
  
    return (
        <div className='landing'>
          <Top help={click} login={close} show={props.show}/>
          <Middle />
          <div className='blur' onClick={close} style={{display:`${blurDisplay}`}}></div>
          <Login display={display} />
          <div style={{width:'20%',height:'fit-content',zIndex:'500', position:'absolute',right:'8%',top:'15%',background:'white',padding:'2%',boxShadow:'0px 0px 2px grey',display:`${help}`}}>
            <Help />
          </div>
          <Bottom />
            
        </div>
    )
}
