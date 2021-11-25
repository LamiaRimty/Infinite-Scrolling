import React, { useState ,useRef,useCallback} from 'react';
import useBookSearch from './useBookSearch';


export default function App() {

  const [query,setQuery]=useState('')
  const [pageNumber,setPageNumber]=useState(1)
  const { loading,error,books,hasMore} = useBookSearch(query,pageNumber)
  

  const observer = useRef()
  const lastBookElementRef= useCallback(
    (node) => { 

     if(loading) return
     if(observer.current)observer.current.disconnect()

     observer.current=new IntersectionObserver( entries=>{
       if(entries[0].isIntersecting){ //node that observing
         console.log('Visible') //evryting is  watching to be in the entries array
       }
     })

     if(node)observer.current.observe(node) //we want to observe our node
    },[loading,hasMore])  

  function handleSearch(e){
    setQuery(e.target.value)
    setPageNumber(1)
  }

return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
     {books.map((book,index)=>{

       if(books.length===index+1)
       {
         return <div ref={lastBookElementRef} key={book}>{book}</div>
       }
       else
       return <div key={book}>{book}</div>
     })}
     
      <div>{loading && 'Loading...'}</div> 
      <div>{error && 'Error...'}</div>
    </>
  );
}


