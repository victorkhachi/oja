import React,{useState} from 'react'
import Sandwich from './sandwich'
import Cart from '../cart'


export default function Market(prop) {
    const [left, setLeft] = useState('-100%')
    const close=()=>{
        setLeft('-100%')
    }
    const open =()=>{
        setLeft('0%')
    }
    return (
        
        <div className='page'>
            <Cart />
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
                <div style={{ marginRight: '30px' }} className='cart'><i class="fas fa-shopping-cart"></i></div>
                </header>
            
            <div style={{ margin:'auto', height: '80%', marginBottom: '0%',position: 'absolute',overflowY:'scroll'}} className='width'>
                  {prop.content}
              </div>
        </div>
        
    )
}
