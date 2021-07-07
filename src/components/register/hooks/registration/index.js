import config from '../../../../config';
import {useState} from 'react';
import axios from 'axios';
const useRegistration = ()=> {
    const [getFormValues, setGetFormValues] = useState({});
    const {url} = config;
    

    const register = async () => {
        
        const { status, data } = await axios.post(`${url}user/register`, JSON.stringify(getFormValues), {
            headers: {
                "content-type": "application/json"
            }
        });
        console.log(data,status);
        
        if (status === 200) {

            window.location.replace('/signIn')
        }
        
    }
    return {
        register, setGetFormValues
    }
}
export default useRegistration;
