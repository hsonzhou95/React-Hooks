import React, {useState} from 'react';

const Search = (props)=>{
        const [searchValue,setSearchValue] = useState("");
    const handleSearchInputChanges = (e)=>{
        setSearchValue(e.target.value);
    };
    const resetInputeFiled = ()=>{
        setSearchValue('');
    };
    const callSearchFunction = (e)=>{
        e.preventDefault();
        props.search(searchValue);
        resetInputeFiled();
    };
    return(
        <form className='serach'>
            <input value={searchValue} onChange={handleSearchInputChanges} type='text' />
            <input onClick={callSearchFunction} type='submit' value='SEARCH' />
        </form>
    )
};
export default Search;