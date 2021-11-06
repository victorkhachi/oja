import {Fragment,useState,useContext, useEffect} from 'react'
import Basket from '../../images/svg/Basket'
import Increase from '../../images/svg/Increase'
import Reduce from '../../images/svg/Reduce'
import { Total, UserContext } from '../extras/userContext'

const CartList =({data})=>{
    const {value ,setValue}=useContext(UserContext)
    const [number,setNumber]=useState(data.quantity)
    const {total, setTotal}=useContext(Total)
    
    const plus = () => {
         
            setNumber(number+1)
            
            
    }
    

    const remove =()=>{
    const newCart = value.map(item => item.id !== data.id && item ).filter(item => item && item);
    setValue(newCart);
        if (value.length === 0) {
            setTotal(Number('0'))
        }
    
    }
    const minus =()=>{
        if(number>0){
            
            setNumber(number-1)
        }
        
    }
    useEffect(()=>{
         const newCart =value.map(item=>{
             if(item.id===data.id){
                 return {
                     ...data,quantity:number
                 }
             }
             else return item
         })
        setValue(newCart)
        console.log(value);

    },[number])
    const cost = data.price * number
    

    
    data.cost= cost
    
    
    const costs =value.map(data=>data.cost )
    
    let sum=0
    for (let index = 0; index < costs.length; index++) {
        sum+=costs[index]
    }
    
    useEffect(()=>setTotal(sum),[sum])
    
    return(
        <Fragment>
            <div className='cart-list'>
                  <div className='name-unit'>
                            {`${data.name}/${data.unit}`}
                   </div>
                  <div className='cart-price'>
                            N{data.price}
                  </div>
                 <div className='input-div'>
                    <div onClick={minus}  >
                        <Reduce />
                    </div>
                    <input type='number' value={number} className='quant-input' />
                    <div  onClick={()=>{plus();}}>
                        <Increase />
                    </div>

                  </div>
                  <div style={{width:'15%'}}>
                     N{cost}
                  </div>
                  <div  onClick={remove}>
                         <Basket />
                  </div>
        
            </div>

          </Fragment>
    )
}

export default CartList;