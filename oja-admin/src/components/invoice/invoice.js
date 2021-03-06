import React, { useEffect, useState } from 'react'
import Orders from '../extras/orders'
import config from '../config'
import axios from 'axios'



export default function Invoice() {
const {url}=config
const token = localStorage.getItem('token')
const [array,setArray]= useState([])
const [allColor,setAllColor]=useState('color')
const [pendingColor, setPendingColor] = useState('')
const [deliveredColor, setDeliveredColor] = useState('')

    const getOrders = async () => {
        setAllColor('color')
        setDeliveredColor('')
        setPendingColor('')
        try {
            const { status, data } = await axios({
                method: 'get',
                url: `${url}orders/all`,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                },
                data: 'all'

            })
            console.log(status, data.data);
            setArray(data.data)


        }
        catch (error) {
            console.log(token)

            console.log(error.response)

        }
        
    }
    useEffect(()=>getOrders(),[url])

    const pending = async () => {
        setAllColor('')
        setDeliveredColor('')
        setPendingColor('color')

        try {
            const { status, data } = await axios({
                method: 'get',
                url: `${url}orders/pending`,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                },
                data: 'all'

            })
            console.log(status, data.data);
            setArray(data.data)


        }
        catch (error) {
            console.log(token)

            console.log(error.response)

        }

    }
    const headers= {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                }
    const delivered = async () => {
        setAllColor('')
        setDeliveredColor('color')
        setPendingColor('')
        try {
            const { status, data } = await axios({
                method: 'get',
                url: `${url}orders/delivered`,
                headers: headers,
                data: 'all'

            })
            console.log(status, data.data);
            setArray(data.data)


        }
        catch (error) {
            console.log(token)

            console.log(error.response)

        }

    }
    const search = (e) => axios.get(`${url}orders/getById/?id=${e}`, {headers:headers}).then(response =>{
        return response.data
    }).then(response=>setArray([response.data]))


    



    
     const orders=array.map((order)=>(
          <Orders data={order}  />
     ))
    return (
        <div className='invoice'>
            <input type='text' class='search_input' placeholder='Search by ID' onChange={(e)=>search(e.target.value)} />  {//coming soon
}
            <div className='invoice-head'><h2>Invoice</h2> <div className='status'><h3 className={allColor} onClick={getOrders}>All</h3> <h3 className={pendingColor} onClick={pending}>Pending</h3> <h3 className={deliveredColor} onClick={delivered}>Delivered</h3></div></div>
            {orders}
        </div>
    )
}
