import { Fragment, useEffect  } from "react"
import Remove from "./remove";

const Component = ({data})=> {
    const { setCatID, removeCat, catID } = Remove()

    const remove=()=>{
    
            console.log(data.id);
            setCatID(data.id)
            console.log(catID);
            removeCat()
    }
    useEffect(()=>setCatID(data.id))
        
    
    
    return(
        <Fragment>
            <div style={{ width: '90%', height: '15%', display: 'flex', fontWeight: 'bold', alignItems: 'center', margin: '2%', textTransform: 'capitalize', boxShadow: '0px 4px 4px 0px #00000040', padding: '2%', justifyContent: 'space-between' }}>
                <div>{data.category}</div>
                <div style={{ textShadow: '0px 0px 2px grey' }} onClick={remove}>remove</div>
            </div>
        </Fragment>
    )
}

export default Component;
