import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Order } from './contexts'
import axios from 'axios'
import config from '../config'

export default function Orders({data}) {
    const [redirect, setRedirect]=useState(false)
    const {value , setValue}=useContext(Order)
    const token = localStorage.getItem('token')
    const {url} = config;
    const [display, setDisplay] = useState()



  const delivered = async(id)=>{
      try {
          const { status, data } = await axios({
              method: 'post',
              url: `${url}orders/toggleDeliveryStatus`,
              headers: {
                  "Authorization": `Bearer ${token}`,
                  "content-type": "application/json"
              },
              data: {id:id}

          })
          console.log(status, data);
          


      }
      catch (error) {
          console.log(token)

          console.log(error.response)

      }
  }
    useEffect(() => {
        if (data.delivered_status === '2') {
            // console.log('hi');
            setDisplay('none')
        }
    },[data.delivered_status])



    const open =()=>{
        // setValue({name:data.name,address:data.address,tel:data.tel,note:data.notes,list:JSON.parse(data.list),total_price:data.total_price})
        localStorage.setItem('id',data.id)
        setRedirect(true)
    }
    if(redirect){
       return <Redirect to ='/orders'/>
    }
   
    

    return (
        <Fragment>
            <div  key={data.id} className='orders'>
                <div onClick={open} style={{ marginLeft: '1%',textTransform:'capitalize' }}>  {data.name}  from   {data.address} {data.zone}</div>

                <div>{data.updatedAt}</div>
                <button style={{display:`${display}`}} onClick={()=>{
                        delivered(data.id)
                        }}>
                        delivered
                        </button>
            </div>

        </Fragment>
            
        
    )
}
