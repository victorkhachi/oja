import React from 'react'
import{Link } from 'react-router-dom'
import Logo from './logo'




export default function Front(props) {
    
     
    return (
        
        
        <div className='front'>
            
              <div className='gradient'>
                  <div className="sign-in-container">
                  <Link  to='/signIn' className='sign-in'  onClick={props.page}>
                      sign in
                    </Link>

                </div>
                

                 <div className='ad'>
                    <Logo />
                    <p>shop now and get a speedy delivery at your doorstep</p> 
                    <Link to='/location' className='button'>send me!</Link>

                 </div>
              </div>
              
            
        </div>
    )
}
