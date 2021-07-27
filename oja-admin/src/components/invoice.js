import React from 'react'
import Orders from './extras/orders'
export default function Invoice() {
    const array=[
        {name:'vgfg',address:'ctftfyu'},
        {id:1, name: 'kachi', address: 'ctftfyu' },
        { id:2,name: 'uche', address: 'ctftfyu' },
        { id:3,name: 'radiance', address: 'ctftfyu' },
        { id:4, name: 'nma', address: 'ctftfyu' },
        {id:5, name: 'eze', address: 'ctftfyu' }

    ]
     const orders=array.map((order)=>(
          <Orders data={order}  />
     ))
    return (
        <div className='invoice'>
            <h2>Invoice</h2>
            {orders}
        </div>
    )
}
