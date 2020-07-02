import React from 'react';
import SearchList from "./SearchList";

function SearchPanel(props) {
    const { originCity, destinationCity, searchResult, startDate } = props;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const selctedDate  = startDate.toLocaleDateString("en-US", options); 

    return (
        <div className="box">
            <div className="box-header">
                <h3 className="box-title">{originCity} to {destinationCity}</h3>
                <p className="box-subtitle">{searchResult.length} fights found&nbsp; {selctedDate}</p>
            </div>
            <div className="search-data">

                {searchResult && searchResult.length > 0 ? searchResult.map((flight, index) => (
                    <SearchList key={index} flight={flight} />
                )) : <div><h3>No Records FOund</h3></div>}
            </div>
        </div>

    );
}

export default SearchPanel;