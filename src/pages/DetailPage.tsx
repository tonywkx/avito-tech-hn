/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { IProduct, IComment } from '../models';

interface IDetailId{
  id: 'string'
}

export function DetailPage() {

  const { id }: IDetailId = useParams()

  const [newsItem, setNewsItem] = useState<IProduct>()
  const [comments, setComment]= useState<IComment[]>([])
  const [loading, setLoading] = useState(false)
  const [nestedComments, setNestedComment]= useState<IComment[]>([])
 
  async function getComments() {
    setLoading(true)
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    try {
      const response = await fetch(url);
      if (response.ok === false) {
        throw new Error("Response Error:" + response.text);
      }
      const RESjson = await response.json();
      setNewsItem(RESjson)
    
      if(RESjson.kids){
        const promises = RESjson.kids
        .map((id: any) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            response => response.json()
          )
        );
      const result = await Promise.all(promises);
      setComment(result);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false)
  }

  useEffect(() => {
    getComments()
  },[])

  let date;
  let hours;
  if(newsItem){
    let time = newsItem?.time
    let fin = new Date(time * 1000)
    hours = `${fin.getHours()}:${fin.getMinutes() < 10 ? '0' + fin.getMinutes() : fin.getMinutes()}`
    date = `${fin.getDate()}.${fin.getMonth() + 1}.${fin.getFullYear()}    `
  }
  
  interface IMarckup{
     __html: string
  }

  async function loadMoreComments(arr: any){
    if(arr){
      const promises = arr
        .map((id: any) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            response => response.json()
          )
        );
      const result = await Promise.all(promises);
      setNestedComment(result)
    }
  }

  return (
   <div className=' bg-cyan-200 box-border h-full min-h-screen'>
      <div className="container mx-auto max-w-3xl pt-53 items-center">
      <div className='flex flex-row justify-around mb-8 pt-8'>
            <Link to='/'>
              <button className=' border font-bold bg-lime-500 hover:bg-lime-700 hover:text-white px-2 py-4 rounded-2xl outline-8 border-l-teal-500 shadow-xl shadow-gray-800  '>Back to NewsList</button>
            </Link>
            <button className='border font-bold bg-fuchsia-600 hover:bg-orange-700 hover:text-white  px-2 py-4 rounded-2xl outline-8 border-l-teal-500 shadow-xl shadow-gray-800 ' onClick={() => getComments()}>Refresh comments</button>
          </div>
        {loading && <p className='text-center text-slate-800 text-xl font-bold'>Loading...</p>}

        <div className='border py-2 px-5 pb-6 flex flex-col opacity-90 items-center mb-4 shadow-lg bg-blend-saturation shadow-slate-600 bg-indigo-600 outline-2 rounded-3xl border-orange-700'>
      
        <div className='flex flex-row justify-around pt-6'>
          <div >
            <a href={newsItem && newsItem?.url} className='text-center underline font-bold mr-10 text-sky-600 bg-white px-1 py-2 border rounded-lg' > Link to sourse</a>
          </div>
          <p className='font-extrabold text-center text-lg bg-white rounded mb-5'>{newsItem?.title}</p>
        </div>
        <div>
        <span className='font-bold mr-8'>Author: {newsItem?.by}</span>
        <span className='font-bold mr-8'> {date} <span className='text-lg bg-fuchsia-800 py-1 px-2 rounded-md text-gray-50'>{hours}</span> </span>
        <span className=' text-xl bg-violet-700 px-1 py-2 text-white rounded-sm' >Comments: {comments.length} </span>
        </div>
        </div>
          
        <div className='text-left border rounded bg-indigo-300 '>
        {comments && comments.map(item => {
          const createMarkup = (): IMarckup => ({ __html: item.text })
          return <p className='py-2 px-4 bg-purple-300 mb-2 border-green-500 outline-2 shadow-md shadow-slate-800' 
          dangerouslySetInnerHTML={createMarkup()} key={item.id} 
          onClick={() => loadMoreComments(item.kids)} ></p> 
        }) } 
        </div>
        <div>
          {nestedComments && nestedComments.map(item => {
          const createMarkup = (): IMarckup => ({ __html: item.text })
          return <p className=' py-2 left-4 px-4 bg-blue-500 mb-2 border-blue-300 outline-2 shadow-md shadow-slate-800' dangerouslySetInnerHTML={createMarkup()} key={item.id} onClick={() => loadMoreComments(item.kids)} ></p> 
        }) } 
        </div>
      </div>
   </div> 
  )
}