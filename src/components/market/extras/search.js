import { useEffect, useState } from "react"
import axios from 'axios'
import config from "../../../config"


export default function Search() {
    const [key ,setKey]=useState('')
    const {url}=config
    

    const [categories, setCategories] = useState([{}])
    
    
    useEffect(() => { axios.get(`${url}products/categories`).then(response => setCategories(response.data.categories)) }, [url])
    
    
    const search=(key)=>{
        console.log(key);
         setKey(key)
    }
    useEffect(()=>setKey(key),[])
   console.log(key); 
    const newArray = categories.filter(match => {
        return match.category === key
    })
    console.log(newArray);
    
    return {
       setKey,key,categories,search,newArray
    }
        
            
        
    
}
