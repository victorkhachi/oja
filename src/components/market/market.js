import React,{useState,useContext} from 'react'
import Sandwich from './sandwich'
import {Link} from 'react-router-dom'
import { Order } from './extras/userContext'


export default function Market(prop) {
    const {order,setOrder}=useContext(Order)
    const [left, setLeft] = useState('-100%')
    const close=()=>{
        setLeft('-100%')
    }
    const open =()=>{
        setLeft('0%')
    }
    console.log(order);
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
                        <input type='text' name style={{
                            border: '1px solid #D4AF37',
                            boxSizing: 'border-box',
                            borderRadius: '10px',
                            padding:'4% 0 4% 0'}}
                        />
                    <button style={{background:'orange',padding:'10px',border:'none'}}><i class="fas fa-search"></i></button>
                    </div>
                <Link to='/cart' style={{ marginRight: '30px',color:'black' }} className=''><i class="fa-2x fas fa-shopping-cart" ></i></Link>
                </header>
            
            <div style={{ margin:'auto', height: '80%', marginBottom: '0%',position: 'absolute',overflowY:'scroll'}} className='width'>
                  {prop.content}
              </div>
        </div>
        
    )
}
