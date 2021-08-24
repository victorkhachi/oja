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
    const {cat,setCat}=useContext(Products)
    
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
        console.log(cat);
    }
    // {
    //     axios.get(`${url}products/`).then(response => {

    //         setArray(response.data.product)
    useEffect(()=>items(),[url])
    
    
    const cards= array.filter(product=>{
        return product.category===cat
    })
    
    
    if(!cat){
        return <Redirect to='/market'/>
    } 
     
    return(
        <div>
           <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', alignItems: 'baseline' }}>

              <Link to='/market' style={{
                    width: '15%', height: '50px', margin: '15 % 0px 0px 5%' }} className='back'>
                        <Back />
             </Link>
                <p style={{fontSize:'1.5em',fontWeight:'bold',marginLeft:'5px'}}>{cat}</p>
            </div>
           <div style={{display:'flex',width:'85%',justifyContent:'space-between',flexBasis:'30%',flexWrap:'wrap',margin:'auto'}}>
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