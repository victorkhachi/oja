import React from 'react'
import {Link} from 'react-router-dom'



export default function Top( props) {
    
    
        
    return (
        <div className='top'>
            <h1 className='top-name'>
                ọjà.com
            </h1>
            <div style={{width:'40%',display:'flex',justifyContent:'space-between',marginLeft:'15%',alignItems:'center'}}>
               <div >
                  <select style={{display:`${props.show}`}} className='top-option'onClick={props.login}>
                       <option selected disabled hidden>Sign in</option>
                        

                  </select>
               </div>
               <div>
                   <select onClick={props.help} className='top-option'>
                       
                        <option selected disabled hidden>help</option>
                    </select>
                </div>
                <Link style={{color:'black',textDecoration:'none'}} to ='/cart'><i class="fa-2x fas fa-shopping-cart" ></i></Link>
            </div>
        </div>
    )
}
