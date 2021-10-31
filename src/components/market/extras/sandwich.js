import React from 'react'
import About from '../../images/svg/About'
import Contact from '../../images/svg/Contact'
import Support from '../../images/svg/Support'

export default function SandwichCon() {
    const menuBar = [
        {
            icon: <About />,
            name: 'about-us',
            link: ''
        },
        {
            icon: <Contact />,
            name: 'contact-us',
            link:'Tel:08179049908'
        },
        {
            icon: <Support />,
            link: 'mailto:info@horjah.com',
            name: 'feedbacks'
        }
    ]
    const content = menuBar.map((item => (
        <a href={item.link} className='sandwich'>
            <div style={{ marginLeft: '20%' }}>{item.icon}</div><div style={{ marginRight: '20%' }}>{item.name}</div>
        </a>
    )))
    return { content}
        
           
        
    
}
