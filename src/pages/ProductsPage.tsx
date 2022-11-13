import React from 'react'
import { Product } from '../components/Product';
import { usePoducts } from '../hooks/products';

export default function ProductsPage() {

  const { products, loading, getTopStories } = usePoducts()

    return (
    <div className=' bg-cyan-200 box-border h-full min-h-screen'>
      <div className="container mx-auto max-w-3xl pt-53 flex flex-col items-center ">
        <h1 className='text-teal-800 mb-8 mt-8 text-center font-extrabold text-2xl decoration-slate-700 underline-offset-1' >Custom Hacker News</h1>
        <button className='py-2 px-4 border hover:bg-lime-800 hover:text-white font-bold outline-4 border-orange-300 rounded-2xl shadow-xl text-center mb-4 bg-lime-600' onClick={() => getTopStories()} >Refresh News</button>
        {loading && <p className='text-center text-slate-800 text-xl font-bold'>Loading...</p>}
        <div>
          { products.map(product => <Product product={product} key={product.id}/>) }
        </div>
      </div>
    </div>
      
    );
}