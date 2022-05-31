import React, {useState} from 'react'
import './rooms.css'
import {useNavigate} from 'react-router-dom'

export default function Rooms(props) {
    const [displayRoom,setDisplay] = useState('none');
    const [bgColor,setBgColor] = useState('');
    const[flag,setFlag]=useState(true)
    const nev = useNavigate();

    const changeColor=()=>{
        if (flag){
            setBgColor(props.home.rooms[props.i].color)
            if (props.home.rooms[props.i].type === undefined){
                setFlag(false)
                return(
                setDisplay('none'))
            }
            else{
                setFlag(false)
                return(
                setDisplay('inline'))
            }
        }
    } 

  return (
    <div className='roomD'>
       
       <button onClick={()=>{nev(`/room${props.home.rooms[props.i].name}`,{state:{index:props.i,name:props.home.rooms[props.i].name}})}} className='btnRoom' style={{display:displayRoom,backgroundColor:bgColor}}>{props.home.rooms[props.i].name} </button>
        {changeColor()}

    </div>
  )
}

