// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import SearchPage from './searchresults/Search';
import{Dropdown, DropdownButton, Form, InputGroup} from 'react-bootstrap'
const props = {text:"frozen",language:"en-US",page:1};
function ButtonDropdownsExample() {
    let value = '';
    let sort = 'popularity.desc';
    function onSubmit(){
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
          <Dropdown.Item onClick={dropDownClick} href="#" id='rating.desc'>rating descending</Dropdown.Item>
          <Dropdown.Item onClick={dropDownClick} href="#" id='rating.asc'>rating ascending</Dropdown.Item>
        </DropdownButton>
        
            <input type='text' className='form-control' placeholder="Search movies" onChange={onChange}></input>
            <input type="submit" id='submitfire' className='btn btn-danger' value='Go' onClick={onSubmit}></input>
        </form>
      </InputGroup>
      <SearchPage {...props}></SearchPage>
    </>
  );
}


export default ButtonDropdownsExample;