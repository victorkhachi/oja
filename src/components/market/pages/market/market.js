import React,{useState,useContext, useEffect} from 'react'
import Sandwich from './sandwich'
import {Link} from 'react-router-dom'
import Search from '../../../images/svg/Search'
import Hamburger from '../../../images/svg/Hamburger'
import Shopping from '../../../images/svg/Shopping'
import SearchCategories from './searchCategories'
import { Searcher } from '../../extras/userContext'



export default function Market(prop) {
    
    const [display,setDisplay]=useState('none')
    const [left, setLeft] = useState('-100%')
    
    
    const close=()=>{
        setLeft('-100%')
    }
    const open =()=>{
        setLeft('0%')
    }
    
    const {key, setKey} = useContext(Searcher)
    const none =()=>setDisplay('none')
    
   useEffect(()=>console.log(key))
   const search=()=>{
       if (key)setDisplay('inline-block')     
   }
   
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
                    <div style={{height:'34px'}}><button  className='search-button' onClick={search}><Search /></button></div>
                    </div>
                <Link to='/cart' style={{ marginRight: '5%',color:'black' }} className=''><Shopping /></Link>
                </header>
            <div style={{ zIndex:100, width: "100%", height: '100%', display: `${display}`,background:'#E5E5E5',position:'absolute'}}> <SearchCategories close={none} /></div>
            <div style={{zIndex:'0', margin:'auto', height: '80%', marginBottom: '0%',position: 'absolute',overflowY:'scroll'}} className='width'>
                  {prop.content}
              </div>
        </div>
        
    )
}
