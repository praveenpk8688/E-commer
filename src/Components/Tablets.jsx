import React from 'react'
import {tablet} from '../Data'
import { Link } from 'react-router-dom'
import './Css/E-products.css'

export default function Tablet() {
    // const Datable = [mobile];
const remainingStock=Math.floor(Math.random() * 10/2)+1;
    
  return (
    <>
    <p className='cat-main' id='Tablets'>Tablet</p>
    
    <div className='container'>
      
      {
        tablet.map((item) => (
                <div className='container-main'>
                  <span className='discount'>Discount Available</span>

                <img  src={item.image} alt={item.brand}/>
                <div className='printer-details'>
                    <h2 className='brand' >{item.brand} {item.model}</h2>
                    <pre>Price: ${item.price} <strike>${1000}</strike></pre>
                    <p className='desc1'>{item.description}</p>
                    <h3 className='stock' style={item.instock ? {color: 'green'} : {color: 'red'}}> {item.instock ? 'In Stock' : 'Out of Stock'}</h3>
                    <pre className='stockCount'>{item.instock ? '' : `HurryUp! only ${Math.floor(Math.random() * 10/2)+1} left`}</pre>
                    <Link className='link-Epro' to={`/tablets/${item.id}`}>
                    BUY NOW</Link>
                </div>
                </div>
                 )
        )
    }
    </div></>
  )
}
