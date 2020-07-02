import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import SearchList from "./components/SearchList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchPanel from './components/SearchPanel';
import NoDataComponent from './components/NoDataComponent';

function App() {

  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date().setDate(new Date().getDate() + 1));
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeStartDate = date => {
    setStartDate(date)
  };

  const handleChangeEndDate = date => {
    setReturnDate(date)
  };

  const handleSearch = () => {

    console.log("data ", originCity, destinationCity, startDate)

    fetch(
      `http://localhost:3000/data.json`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        let searchResults = response.filter(function (el) {
          return el.origin === originCity &&
            el.destination === destinationCity;
        });
        setSearchResult(searchResults);
        console.log("searchResults ",searchResults)
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {

  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Flight Search App</h1>
      </div>
      <div className="row">
        <div className="side">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">One Way</h3>
            </div>
            <form role="form">
              <div className="box-body">
                <div className="form-group">
                  <input type="text" autoComplete="none" className="form-control" id="originCity" name="originCity" onChange={e => setOriginCity(e.target.value)} placeholder="Enter Origin City" value={originCity} />
                </div>
                <div className="form-group">
                  <input type="text" autoComplete="none" className="form-control" id="destinationCity" name="destinationCity" onChange={e => setDestinationCity(e.target.value)} placeholder="Enter Destination City" value={destinationCity} />
                </div>
                <div className="form-group">
                  <DatePicker className="form-control" id="departureDate" placeholder="Departure Date"
                    selected={startDate}
                    onChange={handleChangeStartDate}
                  />
                </div>
                {/* <div className="form-group">
                  <DatePicker className="form-control" id="departureDate" placeholder="Departure Date"
                    selected={returnDate}
                    onChange={handleChangeEndDate}
                  />
                </div> */}
                <div className="form-group">
                  <select className="form-control" id="noOfPassengers">
                    <option>Select Passengers</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>

              </div>
              <div className="box-footer">
                <button type="button" name="searchBtn" id="searchBtn" className="btn btn-primary" onClick={handleSearch}>Search</button>
              </div>
            </form>
          </div>

        </div>
        <div className="main">

          {searchResult && searchResult.length > 0 ? <SearchPanel
            originCity={originCity}
            destinationCity={destinationCity}
            searchResult={searchResult}
            startDate={startDate} /> : <NoDataComponent /> }
          

          {/* <div className="box">
            <div className="box-header">
              <h3 className="box-title">{originCity} to {destinationCity}</h3>
              <p className="box-subtitle">10 fights found Wed, 30 October</p>
            </div>
            <div className="search-data">

              {searchResult && searchResult.length > 0 ? searchResult.map((flight, index) => (
                <SearchList key={index} flight={flight} />
              )) : <div><h3>No Records FOund</h3></div>}
            </div>
          </div> */}
        </div>
      </div>


      {/* <div className="footer">
        <h2>Footer</h2>
      </div> */}
    </div>
  );
}

export default App;
