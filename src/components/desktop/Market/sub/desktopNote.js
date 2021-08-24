import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Order } from '../../../market/extras/userContext'

export default function DesktopNote() {

    const [note, setNote] = useState('')
    const [redirect, setRedirect] = useState(false)

    const { order, setOrder } = React.useContext(Order)
    const typing = (e) => {
        setNote(e.target.value)
        console.log(note);
    }
    React.useEffect(() => setOrder({ ...order, notes: note }), [note])
    const save = () => {
        setOrder({ ...order, note: note })
        console.log(order);
        setRedirect(true)
    }
    if (redirect) {
        return <Redirect to='/cart' />
    }
    return (
        <div style={{width:'100%',height:'100%'}}>
            <div style={{ width: '80%', position: 'relative', top: '10%', left: '15%', height: '50%' }}>
                <div style={{ width: '100%', color: 'white', fontWeight: 'bold', background: '#55DB52', padding: '2% 2%' }}>Add Notes</div>
                <textarea onChange={typing} placeholder='Enter  order descriptions' style={{ width: '100%', height: '100%', padding: '2%' }} />
                <button onClick={save} className='reset'>Done</button>
            </div>
        </div>
    )
}
