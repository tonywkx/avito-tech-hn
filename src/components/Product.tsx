import React, { /* useState  */} from 'react'
import { IProduct } from '../models'

interface ProductProps{
    product: IProduct
}

export function Product({product}: ProductProps) {
    /* const [details, setDetails] = useState(false);

    const btnBgClassName = details ? 'bg-amber-400' : 'bg-blue-400';
    const btnClasses =['py-2 px-4 border', btnBgClassName] */

    let time = new Date(product.time * 1000)
    let date = `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}  ${time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes() }`
    
  return (
    <div className='border py-2 px-5 rounded flex flex-col items-center mb-2 bg-zinc-300 ' onClick={() => console.log(product.type)} >
     
      <p>{product.title}</p>
        <p className='font-bold bg-emerald-300'>Rate: <span>{product.score}</span></p>
        <span className='font-bold'>Author: {product.by}</span>
        <span className='font-bold'> {date }</span>
        {/* <button className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}
        >
            { details ? 'Hide details' : 'Show details' }
        </button>
        { details && <div>
            <p>{product.text}</p>
        </div>} */}
    </div>
  )
}
