import React from 'react'
import axios from 'axios'
import config from '../../config'

export default function useCategory() {
       const {url}=config
       const [addCategory, setAddCategory]= React.useState({name:''})
    const addCat = async () => {
        try {
            const { status, data } = await axios.post(`${url}products/createCategory`, JSON.stringify(addCategory), {
                headers: {
                    "content-type": "application/json"
                }
            });
            console.log(status);
            console.log(data)
            
            
        }catch (error) {
            console.log(error);
        }
}

    return {

       setAddCategory, addCat
    }
}
// will take a look later..., push  ur own code to git.. let me use it for test, cos post man has no issues at all showing messages,ok ill do that look at the reset for me too