import React from 'react'

export default function Middle() {
    return (
        <div className='middle'>
            <div className='middle-grad'>
              <div style={{width:'60%',marginLeft:'5%'}}>
                    Shop now and get a speedy delivery at your doorstep
              </div>
                
                 <form style={{width:'100%',marginTop:'0',display:'flex',flexDirection:'column'}}>
                <input style={{
                    width: '40%', padding: '2% 0', marginTop: '2%', background: '#ECCC64', border: '2px solid #ECCC64', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px', marginLeft: '5%'}} placeholder='Enter delivery address'/>
                <button  className='reset' style={{marginTop:'3%',width:'20%', marginLeft:'5%',padding:'1%'}}>
                    Send me!
                </button>
                </form>
            </div>
            
        </div>
    )
}
