import React,{useState,useContext, useEffect} from 'react'
import Sandwich from './sandwich'
import {Link} from 'react-router-dom'
import Search from '../../../images/svg/Search'
import Hamburger from '../../../images/svg/Hamburger'
import Shopping from '../../../images/svg/Shopping'
import SearchCategories from './searchCategories'
import { Searcher } from '../../extras/userContext'



export default function Market(prop) {
    
    
    const [left, setLeft] = useState('-100%')
    
    
    const close=()=>{
        setLeft('-100%')
    }
    const open =()=>{
        setLeft('0%')
    }
    
    const {key, setKey} = useContext(Searcher)
    
    
   
   
    return (
        
        <div className='page'>
            
            <Sandwich left={left} close={close}/>
            <div className='market-cover'></div>
               <header>
                   <div style={{marginLeft:'5%'}} onClick={open}>
                      <Hamburger />
                   </div>
                    <div className='input' style={{width:'fit-content' ,display:'flex',alignItems:'center'}}>
                        <input type='text' name='search' className='search-bar' onChange={(e)=>setKey(e.target.value)}/>
                    <Link to='/search' style={{height:'34px'}}><button  className='search-button' ><Search /></button></Link>
                    </div>
                <Link to='/cart' style={{ marginRight: '5%',color:'black' }} className=''><Shopping /></Link>
                </header>
            
            <div style={{zIndex:'0', margin:'auto', height: '80%', marginBottom: '0%',position: 'absolute',overflowY:'scroll'}} className='width'>
                  {prop.content}
              </div>
        </div>
        
    )
}
