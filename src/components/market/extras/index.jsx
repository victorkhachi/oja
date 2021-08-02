import { Fragment , useState , useContext, useEffect } from "react"
import {UserContext} from './userContext'

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
   setImage(`http://localhost:4020${data.image}`)}) 

    return(
        <Fragment>
            <div className='cards'>
                <div  className='card-img' style={{background:`url(${data.image})`, color:'black'}}>
                   <img style={{width:'100%'}} src={image} ></img>
                </div>
                <div style={{ fontWeight: 'bolder', height: '8%', marginTop: '2%', textAlign: 'center' }}>
                {data.name}
                </div>
                <div style={{ fontWeight: 'bolder', height: '8%', marginTop: '2%', textAlign: 'center' }}>
                {data.Price}
                </div>
                <div className='card-input'>
                    <button style={{ border: 'none', width: '25%', borderRadius: '200%', }} onClick={minus} >-</button>
                    <input type='number' onChange={typing} value={number} style={{ width: '40%', border: 'none', height: '30px', display: 'flex', justifyContent: "center", alignItems: 'center', textAlign: 'center', background: '#EDF5E4', margin: '0px 3px' }} />
                    <button style={{ border: 'none', width: '25%', borderRadius: '200%', }} onClick={plus}>+</button>

                </div>
                <div style={{ width: '100%', padding: '3px 0', height: '8%', color: 'white', background: '#55DB52', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={adding}>Add to cart</div>
            </div>
            
        </Fragment>
    )
}

export default Component;

