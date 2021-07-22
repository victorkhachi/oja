import React, { useEffect } from 'react'
import axios from 'axios'
import config from '../../config'

export default function useCategory() {
       const {url}=config
       const [addCategory, setAddCategory]= React.useState({name:''})
       const[message,setMessage]=React.useState('')
    const [categories, setCategories] = React.useState([{}]);
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

       
    return {

       setAddCategory, addCat,message,categories
    }
} 