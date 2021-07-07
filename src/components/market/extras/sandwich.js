import React from 'react'

export default function SandwichCon() {
    const menuBar = [
        {
            icon: <i class="far fa-address-book"></i>,
            name: 'about-us'
        },
        {
            icon: <i class="fas fa-phone"></i>,
            name: 'contact-us'
        },
        {
            icon: <i class="fas fa-comments"></i>,
            name: 'feedbacks'
        }
    ]
    const content = menuBar.map((item => (
        <div style={{
            display: 'flex', background: '#D5EDBB',
            width: '100%', height: '50px', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '10%', boxShadow: '0px 2px gray', textTransform: 'capitalize'
        }}>
            <div style={{ marginLeft: '20%' }}>{item.icon}</div><div style={{ marginRight: '20%' }}>{item.name}</div>
        </div>
    )))
    return { content}
        
           
        
    
}
