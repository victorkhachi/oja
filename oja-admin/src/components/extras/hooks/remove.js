import React from 'react';
import config from '../../config';
import axios from 'axios'
export default function Remove() {
    
    const { url } = config
    const [catID, setCatID] = React.useState()

    const removeCat = async () => {
        console.log(catID)
        try {
            const { status, data } = await axios({
                url: `${url}products/removeCategories`,
                headers: {
                    "content-type": "application/json"
                },
                data: //
            })
            console.log(status);
            console.log(data,catID)



        } catch (error) {
            console.log(error.response)
        }
    }





    return {
        
           removeCat,setCatID,catID
        
}
}

// post(`${url}products/removeCategories`, JSON.stringify(catID), {
//     headers: {
//         "content-type": "application/json"
//     }
// });