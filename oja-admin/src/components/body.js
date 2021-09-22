import React from 'react'

import DashBoard from './img/Vector (1).png'
import Invoice from './img/Vector (2).png'
import Logout from './img/iconfinder_1564506_close_exit_logout_power_icon 1.png'
import {Link} from 'react-router-dom'
export default function Body(props) {

    React.useEffect(()=>{
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
   
    
    return (
        <div className='body'>
            <header>
                <div>
                    ọjà.com
                </div>
            </header>
            <div className='dash-and-cat'>
                <div className= 'dash'>

                    
                    <Link to='/dashboard' className='option'>
                        <div>
                            <img src={DashBoard} alt='' />
                        </div>
                        <div>
                            dash board
                        </div>
                    </Link>
                    <Link  to='/invoice' className='option'>
                        <div>
                            <img src={Invoice} alt='' />
                        </div>
                        <div>
                            Invoice
                        </div>
                    </Link>
                    
                    <Link to='' className='option'>
                        <div>
                            <img src={Logout} alt='' />,

                        </div>
                        <div>
                            Log out
                        </div>
                    </Link>


                </div>
                <div className='content'>
                 {props.children}
                </div>
            </div>
            
        </div>
    )
}
