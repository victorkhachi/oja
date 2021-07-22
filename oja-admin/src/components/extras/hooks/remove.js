import React from 'react';
import config from '../../config';
import axios from 'axios'
export default function Remove() {
    
<<<<<<< HEAD
    const { url } = config
    

    const removeCat = async (catID) => {
        console.log(catID)
=======
    const {url}=config
    

    const removeCat = async (catID) => {
>>>>>>> kachi
        try {
            const { status, data } = await axios({
                url: `${url}products/removeCategories`,
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
        
<<<<<<< HEAD
           removeCat
=======
           removeCat,
>>>>>>> kachi
        
}
}

// post(`${url}products/removeCategories`, JSON.stringify(catID), {
//     headers: {
//         "content-type": "application/json"
//     }
// });