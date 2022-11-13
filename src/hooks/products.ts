import { useEffect, useState } from 'react';
import { IProduct } from '../models';

export function usePoducts(){
  const [products, setProducts]= useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
 
  async function getTopStories() {
    setLoading(true)
    const url = "https://hacker-news.firebaseio.com/v0/newstories.json";
    try {
      const response = await fetch(url);
      if (response.ok === false) {
        throw new Error("Response Error:" + response.text);
      }
      const json = await response.json();
      const promises = json
        .slice(0, 100)
        .map((id: any) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            response => response.json()
          )
        );
      const result = await Promise.all(promises);
      setProducts(result);
    } catch (err) {
      console.error(err);
    }
    setLoading(false)
  }

  useEffect(() => {
    getTopStories()
    const interval = setInterval( () => {
      getTopStories();
    }, 60000);
    return () => clearInterval(interval);
  }, [])

  return {products, loading, getTopStories}
}