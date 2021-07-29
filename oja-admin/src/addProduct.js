import React from 'react'

export default function AddProduct() {
    return (
        <div style={{width:'100%',height:'50%'}}>
           <form style={{width:'100%',display:'flex', flexDirection:'column',justifyContent:'space-between',height:'100%'}}> 
                <div style={{width:'70%',height:'70%',display:'flex',justifyContent:'space-between'}}>
                  <input type='file'/>
                  <div className='input' style={{display:'flex',flexDirection:'column',height:'60%',justifyContent:'space-between',width:'50%'}}>
                     <input type='text' placeholder='Product Name:'/>
                     <input type='text' placeholder='Price:' />
                     <input type='text' placeholder='unit' />
                  </div>
                </div>
               <button style={{width:'30%'}}>Add product</button>
            </form>
        </div>
    )
}
