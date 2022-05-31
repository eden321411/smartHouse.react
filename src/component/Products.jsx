import React,{useState} from 'react'
import './products.css'

export default function Products(props) {
    const[,updateState]=React.useState();
    const forceUpdate = React.useCallback(()=>updateState({}),[]);

    const onOf=(i)=>{
        props.home.rooms[props.index].products[i].changeStatus();
        forceUpdate();
    }

    return (
    <div>
        {props.home.rooms[props.index].products.map((val,i)=>{
            return (
                <button style={{backgroundColor:val.status}} className='pro' key={i} onClick={()=>{onOf(i)}}> {val.name}</button> 
                )
        })}
    </div>
    )
}
