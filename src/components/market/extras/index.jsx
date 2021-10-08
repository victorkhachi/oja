import { Fragment , useState , useContext, useEffect } from "react"
import {UserContext} from './userContext'
import Reduce from '../../images/svg/Reduce'
import Increase from '../../images/svg/Increase'



const Component = ({data})=> {
    const [number,setNumber]=useState(Number(0))
    const plus =()=>{
       setNumber(number +1)
    }
    const [image,setImage]=useState()
    const minus = () => {
        if(number>0){
        setNumber(number -1)
    }}
    const typing =(e)=>{
        setNumber(Number(e.target.value))
    }
    const {value,setValue }=useContext(UserContext)
    const isExisting = (data) => value.map(item => item.id === data.id && true).filter(item => item && item)[0];

    const adding=()=>{
    
        if(number>0){
        data.quantity = number;
        data.cost = data.Price*data.quantity
        !isExisting(data) && setValue([...value, data]);
        
         
        
        

        }
        
    }
   useEffect(()=> {
   setImage(`http://localhost:4020${data.image}`)},[data]) 

    return(
        <Fragment>
            <div className='cards'>
                <div  className='card-img' style={{ color:'black',padding:'4px'}}>
                   <img style={{width:'100%',height:'100%'}} src={image} alt='' ></img>
                </div>
                <div style={{ fontWeight: 'bolder', height: '8%', marginTop: '10px', textAlign: 'center' }}>
                {data.name}
                </div>
                <div style={{ fontWeight: 'bolder', height: '8%', marginTop: '1px', textAlign: 'center',fontSize:'0.8em' }}>
                N{data.price}
                </div>
                <div className='card-input'>
                    <div className='quant-changer' onClick={minus} ><Reduce /></div>
                    <input type='number' onChange={typing} value={number}  />
                    <div className='quant-changer' onClick={plus}><Increase /></div>

                </div>
                <div style={{ width: '100%', padding: '3px 0', height: '8%', color: 'white', background: '#55DB52', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={adding}>Add to cart</div>
            </div>
            
        </Fragment>
    )
}

export default Component;

