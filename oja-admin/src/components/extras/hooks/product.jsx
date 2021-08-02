import React, { Fragment } from 'react'
import Remove from './remove'

export default function Prod({data}) {
    const { removeProd } = Remove()

    const remove = async (id) => {
        await removeProd(data.id)
        document.location.reload()
    }
    return (
        <Fragment>
            <div style={{ boxShadow: '0px 0px 2px black', height: '30px', display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <div>{data.name}</div> <div>N{data.price}/{data.unit}</div> <div onClick={remove}>Remove</div>
            </div>
        </Fragment>
    )
}
