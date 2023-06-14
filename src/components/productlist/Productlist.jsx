import React from 'react'
import "./productlist.css"
import Product from "../product/Product"
import {products} from "../../data.js"
const Productlist = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Create,inspire and get inspired.It's Prem</h1>
            <p className="pl-desc">
                Demo website profile of prototypes
            </p>
        </div>
        <div className="pl-list">
            {products.map((product)=>(
                <Product key={product.id} img={product.img} link={product.link}/>

            ))}           
        </div>
    </div>
  )
}

export default Productlist