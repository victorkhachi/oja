import React from 'react'

export default function Sandwich(prop) {
    

    const menuBar=[
        {
            icon:<i class="far fa-address-book"></i>,
            name:'about-us'
        },
        {
            icon:<i class="fas fa-phone"></i>,
            name:'contact-us'
        },
        {
            icon:<i class="fas fa-comments"></i>,
            name:'feedbacks'
        }
    ]
    const content=menuBar.map((item=>(
        <div style={{
            display: 'flex', background:'#D5EDBB',
            width:'100%',height:'50px',justifyContent:'space-between',alignItems:'center',
            marginBottom:'10%',boxShadow:'0px 2px gray',textTransform:'capitalize'}}>
            <div style={{ marginLeft: '20%'}}>{item.icon}</div><div style={{marginRight:'20%'}}>{item.name}</div>
    </div>
    )))

    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '500',left:`${prop.left}`,transition:'0.2s linear'}}>
            <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)',position:'absolute'}}onClick={prop.close}>
            </div>
            <div style={{ width: '70%', height: '100%', background:' #EDF5E4',position:'relative'}}>
                <div style={{
                    width: '80%', margin: 'auto', background: '#EDF5E4',paddingTop:'5%'}}>
                    <div style={{display:'flex',justifyContent:'space-between',margin:''}}><i class="far fa-window-close" onClick={prop.close}></i> <i class="far fa-sun"></i>
                    </div>
                    <p style={{ fontFamily:'Rosarivo',
                    fontStyle:'normal',
                    fontWeight: 'normal',
                    fontSize: '30px',
                    lineHeight: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginLeft:'25%',
                    color: '#000000',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>ọjà.com</p>
              </div>
                <div style={{textAlign:'center'}}>
                    {content}
            </div>
            
            </div>
        </div>
    )
}
