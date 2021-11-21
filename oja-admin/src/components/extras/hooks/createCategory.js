import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import config from '../../config'
import { Key } from '../contexts'

export default function useCategory() {
       const {url}=config
       const [addCategory, setAddCategory]= React.useState({name:''})
    
    const [categories, setCategories] = React.useState([{}]);

    const {key,setKey}=useContext(Key)
    const addCat = async () => {
        try {
            const { status, data } = await axios.post(`${url}products/createCategory`, JSON.stringify(addCategory), {
                headers: {
                    "content-type": "application/json"
                }
            });
            console.log(status);
            console.log(data)
            // setMessage(data.message)
            
            
        }catch (error) {
            console.log(error.response.data.error)
        }
}
     
    
    //   React.useEffect(() =>{
    //     axios.get(`${url}products/categories`).then(response=>setCategories(response.data.categories))
    //     console.log(categories)
    //    } , [url]) 
      React.useEffect(() =>{
        axios.get(`${url}products/categories`).then(response=>{
            if(!key)setCategories(response.data.categories)
            else {
                 setCategories(response.data.categories.filter(cats=>{return cats.category===key})
            )
            }
            }  
        )
        console.log(categories)
       } , [key]) 
     
    return {

      addCategory, setAddCategory, addCat,categories
    }
} 