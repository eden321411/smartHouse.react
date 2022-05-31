import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Room from "../classes/Room";
import './addRoom.css'

export default function AddRoom(props) {
    const nev = useNavigate();
    const [name,setName]= useState('')
    const [type,setType]= useState('')
    const [color,setColor]= useState('black')

    const valid=()=>{
        let roomToAdd = new Room(type,name,color);
        
        if(props.home.checkIfRoomNameIsAllreadyTaken(name)){
            alert ('ERROR - NAME ROOM IS ALREADY TAKEN');
            nev('/')
        }
        else{
        if(name.length == 0 || type == ''){
            alert ('ERROR');
            nev('/')
        }
        else{
            props.home.addRoom(roomToAdd);
            nev('/')
        }
        }
    }

  return (
    <div>
        <select className='selectRoomType' onChange={(type)=>{setType(type.target.value)}} name='ChoseRoom'>
            <option value="">--Chose Room--</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Bathroom">Bathroom</option>
            <option value="kitchen">kitchen</option>
        </select><br/>

        <input className='inpName' onChange={(name)=>{setName(name.target.value)}} type='text' placeholder='Room Name' maxLength = "5" /><br/>
        <input className='inpColor' onChange={(color)=>{setColor(color.target.value)}} type='color' placeholder='Room Color'/><br/>
        <button className='btnC' onClick={valid} >Create</button>

    </div>
  )
}
