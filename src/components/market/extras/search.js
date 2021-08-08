import { useEffect, useState } from "react"
import axios from 'axios'
import config from "../../../config"


export default function Search() {
    
    const {url}=config
    
    

    const [categories, setCategories] = useState([{}])
    const [item,setItem]=useState([])
    
    useEffect(() => { axios.get(`${url}products/categories`).then(response => setCategories(response.data.categories)) }, [url])
    useEffect(() => { axios.get(`${url}products/`).then(response => setItem(response.data.product)) }, [url])


    const search = (key) => {


        return (

            item.filter(match => {
                return match.name === key
            })
        )
    }
    
    
    
    
    return {
       search,categories,
    }
        
            
        
    
}
