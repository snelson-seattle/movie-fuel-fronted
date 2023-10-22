import SearchPage from './searchresults/Search';
import React, { FormEvent, useState } from 'react'
import{ Button, InputGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
function Searchbar() {
  const initialSearch = useParams();
  console.log(initialSearch);
  const [query, setQuery] = React.useState(initialSearch.searchtext);
  const [currentPage, setCurrentPage] = React.useState(1);
  function nextpage(){
    setCurrentPage(currentPage + 1)
  }
  function prevpage(){
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }
    let value = '';
    function onSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        setQuery(value);
        console.log(value)
    }
    function onChange(event:any){
        value = event?.target.value;
    }
  return (
    <>
      <InputGroup className="w-50 p-3">
      <form className="d-flex" onSubmit={onSubmit}>
            <input type='text' data-testid="searchbar" className='form-control me-3' placeholder="Search movies" onChange={onChange}></input>
            <Button id='submitfire' data-testid="go" className='btn btn-danger' type="submit">Go</Button>
        </form>
      </InputGroup>
      <SearchPage text={query} language="en-US" page={currentPage}></SearchPage>
      
      <Button className='btn btn-danger' data-testid="prevPageButton" id="prevPageButton"  onClick={prevpage}>Previous Page</Button>
      <span>Page:{currentPage}</span>
      <Button className='btn btn-danger' data-testid="nextPageButton" id="nextPageButton" onClick={nextpage}>Next Page</Button>
    </>
  );
}


export default Searchbar;