import react, { useState } from 'react';
import useBookSearch from './useBookSearch';


export default function App() {

  const [query,setQuery]=useState('')
  const [pageNumber,setPageNumber]=useState(1)

  function handleSearch(e){
    setQuery(e.target.value)
    setPageNumber(1)
  }

  useBookSearch(query,pageNumber)
  return (
    <div>
      <input type="text"></input>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Loading</div>
      <div>Error</div>
    </div>
  );
}


