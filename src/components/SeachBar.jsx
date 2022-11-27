
import { useState } from "react";


function SearchBar({ setSearch , search }) {

   
    return (<>
        <div className="row col flex-container m-3">
       
        


            <form className="d-flex col-12 "
                role="search"
                onSubmit={(e) => {
                    e.preventDefault();
                    
                   
                    setSearch('');

                }}
            >
                <input
                    value={search}
                    className="form-control "
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                />

            </form>
        </div>
        
        </>);
}

export default SearchBar;