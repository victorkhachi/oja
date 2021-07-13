import React from 'react'
import {Link} from 'react-router-dom'



export default function Top(props) {
    return (
        <div style={{width:'100%',height:'10%', display:'flex',alignItems:'center', justifyContent:'space-between'}}>
            <h1 className='desktop-name'>
                ọjà.com
            </h1>
            <div style={{width:'fit-content',display:'flex'}}>
               <input type='text' placeholder='search items' style={{padding:'10px',borderRadius:'1em 0 0 1em'}} />
                <button style={{ borderRadius:'0 2em 2em 0', background: '#A5060A',color:'white',fontWeight:'bold'}}>Search</button>
            </div>
            
            <div style={{width:'15%'}}>
                <select onClick={props.help} className='top-option'>

                    <option selected disabled hidden>help</option>
                </select>
            </div>

        </div>
    )
}
