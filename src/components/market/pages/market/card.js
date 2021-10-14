import React, { useContext, useEffect, useState } from 'react'
import {Link, Redirect} from 'react-router-dom';
import Component from '../../extras';
import  config from '../../../../config'
import axios from 'axios';
import { Products } from '../../extras/userContext';
import Back from '../../../images/svg/Back';

function Cards() {
    
    const {url}=config
    const [array, setArray] = useState([])
    const cat=localStorage.getItem('category')
    
    const token= localStorage.getItem('token')
    console.log(token);
    const items = async () => {
        try {
            const { status, data } = await axios({
                method: 'get',
                url: `${url}products/`,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                },
                data: cat

            })
            console.log(status, data);
            setArray(data.product)


        }
        catch (error) {
            console.log(token)

            console.log(error.response)

        }
        
    }
    
    useEffect(()=>items(),[url])
    
    
    const cards= array.filter(product=>{
        return product.category===cat
    })
    
    
    
     
    return(
        <div className='category' >
            <div style={{display:'flex',width:'100%',alignItems:'flex-end',display:'flex'}}>
                <Link to='/market' style={{
                    width: '15%', height: '50px',marginRight:'15px'}} className='back'><Back /></Link>
                <p style={{fontSize:'1.5em',fontWeight:'bold'}}>{cat}</p>
            </div>
            <div className='item-content'>
                 { 
                cards.map((card, idx)=>(
                    <Component key={idx} data={card} />
                ))
            }
            </div>
        </div>
       
    )
}

export default Cards;