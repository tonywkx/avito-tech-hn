import React from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../models'
interface ProductProps{
    product: IProduct
}

export function Product({product}: ProductProps) {

  let time = new Date(product.time * 1000)
  let date = `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}`
  let hours =   `${time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes() }`

  return (
    <Link to={`/about/${product.id}`}>
       <div className='border py-2 px-5 flex flex-col hover:bg-indigo-800 opacity-90 items-center mb-4 shadow-lg bg-blend-saturation shadow-slate-600 bg-indigo-600 outline-2 rounded-3xl border-orange-700'>
        <p className='font-extrabold text-center text-lg bg-white rounded mb-5'>{product.title}</p>
        <div>
          <span className='font-bold py-2 px-4 text-gray-50 mr-8 bg-pink-800 rounded-md'>Rate: {product.score}</span>
          <span className='font-bold mr-8'>Author: {product.by}</span>
          <span className='font-bold mr-8'> {date} <span className='text-lg bg-fuchsia-800 py-1 px-2 rounded-md text-gray-50'>{hours}</span></span>
        </div>
        {/* <span className='font-bold'>Comments : {product.kids && product.kids.length > 0 ? product.kids.length : 0 }</span> */}
      </div>
    </Link>
  )
}