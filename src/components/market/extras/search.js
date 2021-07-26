import { useEffect, useState } from "react"
import axios from 'axios'
import config from "../../../config"


export default function Search() {
    
    const {url}=config
    
    

    const [categories, setCategories] = useState([{}])
    
    
    useEffect(() => { axios.get(`${url}products/categories`).then(response => setCategories(response.data.categories)) }, [url])
    
    
    const search=(key)=>{
        console.log(key);
        //  
        return  (
            
            categories.filter(match  => {
                return match.category === key
            })
        )
    }
    
    
    return {
       search,categories,
    }
        
            
        
    
}
