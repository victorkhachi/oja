import React from 'react'
import {Link} from 'react-router-dom'
import RedLogo from '../../images/svg/RedLogo'
import Help from '../../images/svg/Help'
import Login from '../../images/svg/Login'




export default function Top( props) {
    
    
        
    return (
        <div className='top'>
            <RedLogo />
         
            <div style={{width:'40%',display:'flex',justifyContent:'space-between',marginLeft:'15%',alignItems:'center'}}>
                <div style={{ display: `${props.show}` }} onClick={props.login} >
                   <Login />
               </div>
               <div  onClick={props.help}>
                    <Help />
                </div>
            </div>
        </div>
    )
}
