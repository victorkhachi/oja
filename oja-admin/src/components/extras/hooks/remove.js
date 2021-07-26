import React from 'react';
import config from '../../config';
import axios from 'axios'
export default function Remove() {
    
    const {url}=config
    

    const removeCat = async (catID) => {
        console.log(catID);
        try {
            const { status, data } = await axios({
                method:'post',
                url: `${url}products/removeCategory`,
                headers: {
                    "content-type": "application/json"
                },
                data: {id:catID}
            })
            console.log(status);
            console.log(data,catID)



        } catch (error) {
            
            console.log(error.response)
            console.log(catID);
        }
    }





    return {
        
           removeCat
        
}
}

// post(`${url}products/removeCategories`, JSON.stringify(catID), {
//     headers: {
//         "content-type": "application/json"
//     }
// });