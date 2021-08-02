import React, { useContext, useEffect, useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Banana from "../images/banana.jpg";
import Strawberry from "../images/strawberry.jpg";
import Broccoli from "../images/broccoli.jpg";
import Spinach from "../images/spinach.jpg";
import Component from './extras';
import  config from '../../config'
import axios from 'axios';
import { Products } from './extras/userContext';

function Cards() {
    
    const {url}=config
    const [array, setArray] = useState([])
    const {cat,setCat}=useContext(Products)

    useEffect(()=>{axios.get(`${url}products/`).then(response=>{
        console.log(response.data.product);
        setArray(response.data.product)
    })},[url])
    console.log(array);
    console.log(cat);
    const cards= array.filter(product=>{
        return product.category===cat
    })
    
    console.log(cards); 
    if(!cat){
        return <Redirect to='/market'/>
    } 
     
    return(
        <div>
           <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', alignItems: 'baseline' }}>

              <Link to='/market' style={{
                    width: '15%', height: '50px', margin: '15 % 0px 0px 5%' }} className='back'><i class="fa-2x fas fa-arrow-left" style={{ width: '50px',marginLeft:'15px'}}></i>
             </Link>
                <p style={{fontSize:'1.5em',fontWeight:'bold',marginLeft:'5px'}}>Items</p>
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