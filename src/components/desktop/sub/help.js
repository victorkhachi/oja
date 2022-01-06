import React from 'react'
import SandwichCon from '../../market/extras/sandwich'

export default function Help() {
    const {content}= SandwichCon()
    return (
        <div style={{width:'100%',height:'fit-content'}}>
            {content}
        </div>
    )
}
