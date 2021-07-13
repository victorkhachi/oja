import React from 'react'
import {Link} from 'react-router-dom'
import Banana from "../images/banana.jpg";
import Strawberry from "../images/strawberry.jpg";
import Broccoli from "../images/broccoli.jpg";
import Spinach from "../images/spinach.jpg";
import Component from './extras';


function Cards() {
    const cards  = [
        {
            id : 1,
            unit:'unit',
            imgUrl : <img style={{width:'100%'}} src={Banana} alt=''></img>,
            quantity:'' ,
            name : "Banana",
            Price : "101",
          
        },
        {
          id : 2,
          unit: 'unit',
          imgUrl : <img style={{width:'100%'}} src={Strawberry} alt=''></img>,
          quantity: '',
          name : "Strawberry",
          Price : "100",
        
      },
      {
          id : 3,
          unit: 'unit',
          imgUrl : <img style={{width:'100%'}} src={Broccoli}alt=''></img>,
          quantity: '',
          name : "Broccoli",
          Price : "100",
        
      },
      {
          id : 4,
          unit: 'unit',
          imgUrl : <img style={{width:'100%'}} src={Spinach} alt=''></img>,
          name : "Spinach",
          quantity: '',
          Price : "100",
        
      },
      
      
      ]
      
     
    return(
        <div>
           <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', alignItems: 'baseline' }}>

              <Link to='/market' style={{
                    width: '15%', height: '50px', margin: '15 % 0px 0px 5%' }} className='back'><i class="fa-2x fas fa-arrow-left" style={{ width: '50px',marginLeft:'15px'}}></i>
             </Link>
                <p style={{fontSize:'1.5em',fontWeight:'bold',marginLeft:'5px'}}>Items</p>
            </div>
           <div style={{display:'flex',width:'85%',justifyContent:'space-between',flexBasis:'30%',flexWrap:'wrap',margin:'auto'}}>
            { 
                cards.map((card, idx)=>(
                    <Component key={idx} data={card} />
                ))
            }
           </div>
        </div>
    )
}

export default Cards;