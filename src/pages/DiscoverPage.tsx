import DiscoverScroll from "../components/discover/Discover";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import{Dropdown, DropdownButton, Form, InputGroup} from 'react-bootstrap'
const DiscoverPage = () => {
    let genre_ids = useParams()
    console.log(genre_ids.ids)
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sort, setSort] = React.useState("popularity")
    const [sortdir, setSortDir] = React.useState("desc")
    const navigate = useNavigate();
    function nextpage(){
      setCurrentPage(currentPage + 1)
    }
    function prevpage(){
      if(currentPage > 1){
        setCurrentPage(currentPage - 1)
      }
    }
    function dropDownClick(event:any){
        setSort(event.target.id.split(".")[0])
        setSortDir(event.target.id.split(".")[1])
    }
    let value = ""
    function onChange(event:any){
        console.log("change detected")
        value = event?.target.value;
    }
    function gotosearch(){
        navigate(`/search/${value}`)
    }
    return <section>
        <InputGroup className="w-70 p-3">
      <form className="d-flex">
        <DropdownButton
          variant="danger"
          title="Sort by"
          id="input-group-dropdown-1"
          onChange={dropDownClick}
        >
          <Dropdown.Item onClick={dropDownClick} href="#" id='revenue.desc'>revenue descending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='revenue.asc'>revenue ascending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='popularity.desc'>popularity descending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='popularity.asc'>popularity ascending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='vote_average.desc'>rating descending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='vote_average.asc'>rating ascending</Dropdown.Item>
        </DropdownButton>
        
            <input type='text' className='form-control' placeholder="Search movies" onChange={onChange}></input>
            <input type="btn" id='submitfire' className='btn btn-danger' value='Go' onClick={gotosearch}></input>
        </form>
      </InputGroup>
        <DiscoverScroll text={genre_ids.ids} page={currentPage} language="en-US" sortby={sort} sortdir={sortdir}/>
        <input type="btn" className='btn btn-danger' id="prevPageButton" value="Previous Page" onClick={prevpage}></input>
      <span>Page:{currentPage}</span>
      <input type="btn" className='btn btn-danger' id="nextPageButton" value="Next Page" onClick={nextpage}></input>
    </section>;
  };
export default DiscoverPage