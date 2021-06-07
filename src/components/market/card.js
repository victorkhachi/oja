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
            imgUrl : <img style={{width:'100%'}} src={Banana}></img>,
            name : "Banana",
            price : "$101/each",
          
        },
        {
          id : 2,
          imgUrl : <img style={{width:'100%'}} src={Strawberry}></img>,
          name : "Strawberry",
          price : "$100/each",
        
      },
      {
          id : 3,
          imgUrl : <img style={{width:'100%'}} src={Broccoli}></img>,
          name : "Broccoli",
          price : "$100/each",
        
      },
      {
          id : 4,
          imgUrl : <img style={{width:'100%'}} src={Spinach}></img>,
          name : "Spinach",
          price : "$100/each",
        
      },
      
      
      ]
      
      //have a sass for all this styling man... 
     
     
      //is that content below the array u want to map,?its the array i mapped , look up
      //now first thing u have to do is convert all that to a component... so ur work looks nice,. ok... let me try working on it like this first so u get the gist 
    return(
        <div>
         <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', alignItems: 'baseline' }}>

              <Link to='/market' style={{
                    width: '15%', height: '50px', margin: '15 % 0px 0px 5%' }} className='back'><i class="fas fa-arrow-left" style={{ width: '50px',marginLeft:'15px'}}></i>
             </Link>
                <p style={{fontSize:'1.5em',fontWeight:'bold',marginLeft:'5px'}}>Items</p>
        </div>
           <div style={{display:'flex',width:'85%',justifyContent:'space-between',flexBasis:'45%',flexWrap:'wrap',margin:'auto'}}>
            { 
                cards.map((card, idx)=>(
                    <Component key={idx} data={card} />
                ))
            }
           </div>
        </div>
    )
}
//take back to our new comp
export default Cards;