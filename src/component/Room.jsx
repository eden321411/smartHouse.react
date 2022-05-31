import React,{useState} from 'react'
import {Link} from 'react-router-dom'   
import { useLocation } from "react-router-dom"
import Product from '../classes/Product'
import Products from './Products'
import './room.css'

export default function Room(props) {
  const location = useLocation();
  const roomName = location.state.name;
    
  const [productType,setProductType]= useState('')
  const[display,setDisplay]=useState('none')
  const[productsArr,setProductsArr]=useState([])

  // let index = props.home.getRoomIndexByName(roomName);
  let index = location.state.index;

  const showAddProduct=()=>{
    if(display == 'none')
        setDisplay('block')
    else
        setDisplay('none')
    }

  const checkProduct=()=>{
    if(props.home.rooms[index].products.length > 4){
      alert('ERROR')
    }
    else{      
        let productToAdd = new Product(productType);

        if(productType == 'StereoSystem'){
            if(!props.home.rooms[index].containsProduct(productType))
                return(props.home.rooms[index].addProduct(productToAdd))
            else
                alert('ERROR')
        }
        else if(productType == 'HeatedBoiler'){
            if(props.home.rooms[index].type == 'Bathroom')
                return(props.home.rooms[index].addProduct(productToAdd))
            else
                alert('ERROR')
        }
        else if(productType != 'StereoSystem' && productType !='HeatedBoiler' && productType != ''){
            setProductsArr(props.home.rooms[index].addProduct(productToAdd))
                return(productsArr)
        }
        else
            alert('ERROR')
    }
} 

  return (
    <div>
        <h2>Room Name:<span style={{color:props.home.rooms[index].color}}> {props.home.rooms[index].name}</span></h2>
        <h2>Room Type:<span style={{color:props.home.rooms[index].color}}> {props.home.rooms[index].type}</span></h2>

        <Products home={props.home} index={index} />
        <button className='addBtn' onClick={showAddProduct}>Add Product</button><br/>

        <div style={{display:display}}>
          <select className='selectProductType' onChange={(type)=>{setProductType(type.target.value)}} name='SelectProduct'>
              <option value="">--Select Product--</option>
              <option value="AirConditioner">Air-Conditioner</option>
              <option value="HeatedBoiler">Heated Boiler</option>
              <option value="StereoSystem">Stereo System</option>
              <option value="Lamp">Lamp</option>
          </select><br/>
          
          <button className='addProductBtn' onClick={()=>{showAddProduct();checkProduct()}}>ADD</button>
        </div>

        <Link to='/'><button className='homeBtn'>HOME</button></Link>
    </div>
  )
}
