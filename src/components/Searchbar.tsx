// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import SearchPage from './searchresults/Search';
import React, { useState } from 'react'
import{ Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
function ButtonDropdownsExample() {
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
    let sort = 'popularity.desc';
    function onSubmit(){
        setQuery(value);
        console.log(value)
    }
    function onChange(event:any){
        console.log("change detected")
        value = event?.target.value;
    }
    function dropDownClick(event:any){
        console.log('something happened!')
        console.log(event.target.id)
    }
  return (
    <>
      <InputGroup className="w-50 p-3">
      <form className="d-flex" onSubmit={onSubmit}>
            <input type='text' className='form-control' placeholder="Search movies" onChange={onChange}></input>
            <input type="btn" id='submitfire' className='btn btn-danger' value='Go' onClick={onSubmit}></input>
        </form>
      </InputGroup>
      <SearchPage text={query} language="en-US" page={currentPage}></SearchPage>
      
      <input type="btn" className='btn btn-danger' id="prevPageButton" value="Previous Page" onClick={prevpage}></input>
      <span>Page:{currentPage}</span>
      <input type="btn" className='btn btn-danger' id="nextPageButton" value="Next Page" onClick={nextpage}></input>
    </>
  );
}


export default ButtonDropdownsExample;