import React from 'react'
import Top from './sub/top'


export default function DesktopMarket(props) {
    
    return (
        <div className='desktop-market'>
            <Top />
            <div style={{ width: '100%', height: '90%',display:'flex'}}>
                <div style={{width:'80%',height:'90%',marginLeft:'5%'}}>
                    {props.content}
               </div>
                <div style={{ position:'relative',right:'0',width: '35%', height: 'fit-content',boxShadow:'0 0 3px grey',display:`${props.display}`}}>
                 {props.content2}
                </div>
            </div>
            
        </div>
    )
}
