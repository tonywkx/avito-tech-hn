import React from 'react'
import { Product } from '../components/Product';
import { usePoducts } from '../hooks/products';
import {useDispatch, useSelector} from 'react-redux'


export default function ProductsPage() {

const dispatch = useDispatch()
  const news = useSelector(state => state.news.news)
  console.log(news)
  
  
    const { products, loading, getTopStories } = usePoducts()

    return (
      <div className="container mx-auto max-w-2xl pt-5">
        <h1>Start custom</h1>
        <button className='py-2 px-4 border bg-lime-600' onClick={() => getTopStories()} >Refresh News</button>
        {loading && <p className='text-center'>Loading...</p>}

  
        { products.map(product => <Product product={product} key={product.id}/>) }
      </div>
    );
}
