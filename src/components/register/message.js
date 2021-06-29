import React from 'react'
import {Link} from 'react-router-dom'

export default function Message(props) {
    return (
        <div className='welcome'>
            <div className='response'>{props.response}</div>
            <Link to='/signIn'><button className='reg-button'>LOG IN</button></Link>
        </div>
    )
}
