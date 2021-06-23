import React from 'react'
import{
Link,
 } from 'react-router-dom'




export default function Front(props) {
    
    
   
  
  
    return (
        
        
        <div className='front'>
            
              <div className='gradient'>
                  <Link  to='/signIn' className='sign-in'  onClick={props.page}>
                    <p style={{marginTop:'10px'}}>sign-in</p>
                  </Link>

                 <div className='ad'>
                    <h1>ọjà.com</h1>
                    <p>shop now and get a speedy delivery at your doorstep</p> 
                    <Link to='/location' className='button'>send me!</Link>

                 </div>
              </div>
              
            
        </div>
    )
}
