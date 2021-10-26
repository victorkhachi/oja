import React, { useContext, useEffect, useState } from 'react'
import {useHistory, Redirect} from 'react-router-dom';
import Component from '../../extras';
import  config from '../../../../config'
import axios from 'axios';
import { Products } from '../../extras/userContext';
import Back from '../../../images/svg/Back';

function Cards() {
    const history = useHistory()
    const {url}=config
    const [array, setArray] = useState([])
    const cat=localStorage.getItem('category')
    const [display,setDisplay]=useState('flex')
    const [totalPages,setTotalPages]=useState()
    const token= localStorage.getItem('token')
    const headers={
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                }
        const [page,setPage]=useState(1)
    useEffect(() => axios.get(`${url}products/?category=${cat}&page=${page}`, headers).then(response => {
        setTotalPages(response.data.totalPages);
        return response.data.product }).then(response => setArray(response)), [page]) 
        
        useEffect(()=>{if(page===totalPages)setDisplay('none')
                        else setDisplay('flex')},[page])

    
    return(
        <div className='category' >
            <div className='pad' style={{display:'flex',width:'100%',alignItems:'center'}}>
                <div onClick={()=>history.goBack()}  className='none back' style={{
                    width: '15%', height: '50px',marginRight:'15px'}} ><Back />
                    </div>
                <p style={{fontSize:'1.5em',fontWeight:'bold',textTransform:'uppercase'}}>{cat}</p>
            </div>
            <div className='item-content'>
                 {
                array.map((card, idx)=>(
                    <Component key={idx} data={card} />
                ))
            } 
            </div>
            <div style={{ justifyContent: 'space-between', width: '200px', height: '40px', color: '#A5060A', textTransform: 'capitalize', margin: 'auto', display: display }}><div onClick={() => { if (page > 1) setPage(page - 1) }}> prev</div><div onClick={() => { if (totalPages > page) setPage(page + 1)} }>Next</div></div>

        </div>
       
    )
}

export default Cards;