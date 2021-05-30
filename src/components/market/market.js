import React from 'react'
export default function Market(prop) {
    return (
        
        <div className='page'>
            <div className='market-cover'></div>
            <header>
                    <div className="menu">
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>
                    <div className='input'>
                        <input type='text' name style={{
                            border: '1px solid #D4AF37',
                            boxSizing: 'border-box',
                            borderRadius: '10px',
                            padding:'2% 0 2% 0'}}/>
                        <button><img src='' alt='' /></button>
                    </div>
                    <div style={{marginRight:'10px'}} className='cart'>image</div>
            </header>
            
              <div style={{margin:'auto',marginTop:'20%'}}>
                  {prop.content}
              </div>
        </div>
        
    )
}
