import React,{useState,useContext, useEffect} from 'react'
import Sandwich from './sandwich'
import {Link,Redirect} from 'react-router-dom'
import { Order, Searcher } from './extras/userContext'



export default function Market(prop) {
    
    
    const [left, setLeft] = useState('-100%')
    const {setSearcher,searcher}=useContext(Searcher)
    
    const close=()=>{
        setLeft('-100%')
    }
    const open =()=>{
        setLeft('0%')
    }
    
    const searching =(e)=>{
     setSearcher(e.target.value)
     console.log(searcher); 
    }
    
   
   
    return (
        
        <div className='page'>
            
            <Sandwich left={left} close={close}/>
            <div className='market-cover'></div>
               <header>
                    <div className="menu" onClick={open}>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>
                    <div className='input' style={{width:'60%'}}>
                        <input type='text' name='search' className='search-bar' onChange={searching}/>
                    <Link to='/searchCategory'><button  style={{ background: 'orange', padding: '10px', border: 'none' }}><i class="fas fa-search"></i></button></Link>
                    </div>
                <Link to='/cart' style={{ marginRight: '30px',color:'black' }} className=''><i class="fa-2x fas fa-shopping-cart" ></i></Link>
                </header>
            
            <div style={{ margin:'auto', height: '80%', marginBottom: '0%',position: 'absolute',overflowY:'scroll'}} className='width'>
                  {prop.content}
              </div>
        </div>
        
    )
}
