import React from 'react'
import Close from '../../../images/svg/Close';
import SandwichCon from '../../extras/sandwich'

export default function Sandwich(prop) {
    const { content} = SandwichCon()

   
    
    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '500',left:`${prop.left}`,transition:'0.2s linear',zIndex:'600',top:'0'}}>
            <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)',position:'absolute'}}onClick={prop.close}>
            </div>
            <div style={{ width: '70%', height: '100%',background: '#FFFEF2',position:'relative'}}>
                <div style={{
                    width: '80%', margin: 'auto', background: '#FFFEF2',paddingTop:'5%'}}>
                    <div style={{display:'flex',justifyContent:'space-between',margin:''}} onClick={prop.close}>
                        <Close /> 
                    </div>
                    <p className='sandwich-name'>ọjà.com</p>
              </div>
                <div style={{textAlign:'center'}}>
                    {content}
            </div>
            
            </div>
        </div>
    )
}
