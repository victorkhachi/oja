import React from 'react'
import Top from './sub/top'
import Cart from './sub/cart'

export default function DesktopMarket(props) {
    
    return (
        <div className='desktop-market'>
            <Top />
            <div style={{ width: '100%', height: '90%',display:'flex'}}>
                <div style={{width:'80%',height:'90%',marginLeft:'5%'}}>
                    {props.content}
               </div>
                <div style={{ width: '25%', height: 'fit-content',boxShadow:'0 0 3px grey',display:`${props.display}`}}>
                 {props.content2}
                </div>
            </div>
            
        </div>
    )
}