import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../../config'


export default function Categories() {
    const {url}=config;
    const [categories, setCategories]=useState([{}])
    useEffect(()=>{axios.get(`${url}products/categories`).then(response=>setCategories(response.data.categories))},[url])
   
   console.log(categories);
   const content = categories.map((category=>(
    
       <Link to='/items' key={category.id} className='categories'>
           <div className='cat-name'>{category.category}</div>
           </Link>
    
   )))
   
     

    return (
        <div className='category' >
            <div style={{display:'flex',width:'50%',justifyContent:'space-between',alignItems:'baseline'}}>
                <Link to='/' style={{
                    width: '15%', height: '50px', margin: '15 % 0px 0px 5%' }} className='back'><i class=" fa-2x fas fa-arrow-left" style={{ width: '50px',marginLeft:'15px'}}></i></Link>
                <p style={{fontSize:'1.5em',fontWeight:'bold',marginLeft:'5px'}}>Categories</p>
            </div>
            <div className='cat-content'>
                {content}
            </div>
        </div>
    )
}
