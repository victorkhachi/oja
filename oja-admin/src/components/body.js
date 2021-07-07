import React from 'react'
import Headset from './img/iconfinder_headset_172475 3.png'
import DashBoard from './img/Vector (1).png'
import Invoice from './img/Vector (2).png'
import Logout from './img/iconfinder_1564506_close_exit_logout_power_icon 1.png'
export default function Body(props) {
   const dashContent=[
       {pic:<img src={DashBoard} alt='' />,
        name:'dash board'},
      { pic: <img src={Invoice} alt=''/>,
       name:'invoice'},
       {pic: <img src={Headset}
       alt='' />,
       name:'support'},
       {pic: <img src={Logout} alt='' />,
       name:'Log out'}
    ]
    const dash =dashContent.map(option=>(
        <div className='option'>
            <div>
                {option.pic}
            </div>
            <div>
                {option.name}
            </div>
        </div>
    ))
    return (
        <div className='body'>
            <header>
                <div>
                    ọjà.com
                </div>
            </header>
            <div className='dash-and-cat'>
                <div className= 'dash'>
                  {dash}  
                </div>
                <div className='content'>
                 {props.content}
                </div>
            </div>
            
        </div>
    )
}
