import React,{useState,useContext} from 'react'
import Sandwich from './sandwich'
import {Link} from 'react-router-dom'
import { Searcher } from '../../extras/userContext'
import Search from '../../../images/svg/Search'
import Hamburger from '../../../images/svg/Hamburger'
import Shopping from '../../../images/svg/Shopping'



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
                        <input type='text' name='search' className='search-bar' onChange={searching}/>
                    <Link to='/searchCategory'><button  style={{ background: 'orange', padding: '10px', border: 'none' }}><Search /></button></Link>
                    </div>
                <Link to='/cart' style={{ marginRight: '5%',color:'black' }} className=''><Shopping /></Link>
                </header>
            
            <div style={{ margin:'auto', height: '80%', marginBottom: '0%',position: 'absolute',overflowY:'scroll'}} className='width'>
                  {prop.content}
              </div>
        </div>
        
    )
}
