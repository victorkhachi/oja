import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useHistory,Link } from 'react-router-dom'
import config from '../../../../config'
import { Searcher } from '../../extras/userContext'
import Back from '../../../images/svg/Back'
import Component from '../../extras/index.jsx'


export default function SearchCategories(props) {
    const { url } = config
    const [array, setArray] = useState([])
    const token = localStorage.getItem('token')
    const {key,setKey}=useContext(Searcher)
    const headers= {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                }
    const [page,setPage]=useState(1)
    const [display, setDisplay] = useState('flex')
    const [totalPages, setTotalPages] = useState()
    useEffect(() => {
        if (page === totalPages) setDisplay('none')
        else setDisplay('flex')
    }, [page])
     
    
    const history=useHistory()

    
    useEffect(()=>{if(key !==" ")axios.get(`${url}products/?name=${key}&page=${page}`,headers).then(response=>{
        setTotalPages(response.data.totalPages);
        return response.data.product}).then(response=>setArray(response))},[key,page])
    

    console.log(array,key,page);
    const [content,setContent]=useState()

    useEffect(()=>{
        
        if (array.length<1) {
           setContent(`No items match ${key} in our inventory`) 
        }
        else setContent('')
    },[array])
    
    return (
        <div className='category' >
            <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                <Link onClick={()=>history.goBack()}  style={{
                    width: '15%', height: '50px', marginRight: '15px'
                }} className='back'><Back /></Link>
                <p style={{ fontSize: '1.5em', fontWeight: 'bold',textTransform:'capitalize' }}>{key}</p>
            </div>
            <div className='item-content' >
                {
                    array.map(items=>(
                        <Component data={items} />
                    ))
                } 
                {content}
            </div>
            <div style={{ justifyContent: 'space-between', width: '200px', height: '40px', color: '#A5060A', textTransform: 'capitalize', margin: 'auto', display: display  }}><div onClick={()=>{if(page>1)setPage(page-1)}}> prev</div><div  onClick={()=> setPage(page + 1)}>Next</div></div>
            
        </div>
    )
}
