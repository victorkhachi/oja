import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import config from '../../config'
import { Key } from '../contexts'

export default function useCategory() {
       const {url}=config
       const [addCategory, setAddCategory]= React.useState({name:''})
       const[message,setMessage]=React.useState('')
    const [categories, setCategories] = React.useState([{}]);
    const [searcher, setSearcher]=useState()
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
            setMessage(data.message)
            
            
        }catch (error) {
            console.log(error.response.data.error)
        }
}
     
    
      React.useEffect(() =>{
        axios.get(`${url}products/categories`).then(response=>setCategories(response.data.categories))
        console.log(categories)
       } , [url]) 
      const search=(key)=>{
          if(!key){
            setSearcher(categories)
          }
          else{
              const found=categories.filter(category=>{
                  return category.category===key 
              })

              setSearcher(found)
          }
        }
        useEffect(()=>search(key),[key])
        console.log(searcher);
    return {

      addCategory, setAddCategory, addCat,message,categories
    }
} 