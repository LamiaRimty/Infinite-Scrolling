import react, { useState } from 'react';
import useBookSearch from './useBookSearch';


export default function App() {

  const [query,setQuery]=useState('')
  const [pageNumber,setPageNumber]=useState(1)

  function handleSearch(e){
    setQuery(e.target.value)
    setPageNumber(1)
  }

  const { loading,error,books,hasMore} = useBookSearch(query,pageNumber)
  return (
    <div>
      <input type="text" onChange={handleSearch}></input>
     {books.map(book=>{
       return <div key={book}>{book}</div>
     })}
     
      <div>{loading && 'Loading...'}</div> 
      <div>{Error && 'Error...'}</div>
    </div>
  );
}


