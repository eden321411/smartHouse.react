import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import Rooms from './Rooms';

export default function Home(props) {

  return (
      <div>
        {props.home.rooms.map((e,index) => {
            return <Rooms key={index} home={props.home} i={index}/>
        })}
        <div className='divBtnAdd'>
        <Link to='/addroom' ><button className='btnAdd'>+</button></Link>

        </div>

      </div>
      
  )
}
