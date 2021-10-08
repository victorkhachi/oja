import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import config from '../../../../config'
import { Searcher } from '../../extras/userContext'
import Back from '../../../images/svg/Back'
import Component from '../../extras/index.jsx'


export default function SearchCategories(props) {
    const { url } = config
    const [array, setArray] = useState([])
    const token = localStorage.getItem('token')
    const {key,setKey}=useContext(Searcher)
    const items = async () => {
        try {
            const { status, data } = await axios({
                method: 'get',
                url: `${url}products/`,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                },
                data: ''

            })
            console.log(status, data);
            setArray(data.product)


        }
        catch (error) {


            console.log(error.response)

        }

    }
    useEffect(() => items(), [url]);

    const [content,setContent]=useState([])
    useEffect(()=>setContent(array.filter(item=>item.name===key)),[key])
    console.log(content,key);
    
    
    return (
        <div className='category' >
            <div style={{ display: 'flex', width: '100%', alignItems: 'flex-end', display: 'flex' }}>
                <Link onClick={props.close} style={{
                    width: '15%', height: '50px', marginRight: '15px'
                }} className='back'><Back /></Link>
                <p style={{ fontSize: '1.5em', fontWeight: 'bold',textTransform:'capitalize' }}>{key}</p>
            </div>
            <div className='cat-content'>
                {
                    content.map(items=>(
                        <Component data={items} />
                    ))
                }
            </div>
        </div>
    )
}
