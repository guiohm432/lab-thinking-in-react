import React from 'react'

function SearchBar({ clbk,handleChecked }) {
    return (
        <div className="searchbar">
            <label>Search</label>
            <input className="style-input" type="text" onChange={clbk}/>
            <div className="checkbox">
            <input type="checkbox" onChange={handleChecked}></input>
            <label>Only show products on stock</label>
            </div>
        </div>)
    
}

export default SearchBar
