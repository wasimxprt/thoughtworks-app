import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import SearchList from "./components/SearchList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {

  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date().setDate(new Date().getDate() + 1));

  const handleChangeStartDate = date => {
    setStartDate(date)
  };

  const handleChangeEndDate = date => {
    setReturnDate(date)
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Flight Search App</h1>
      </div>
      <div className="row">
        <div className="side">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Quick Example</h3>
            </div>
            <form role="form">
              <div className="box-body">
                <div className="form-group">
                  <input type="text" className="form-control" id="originCity" placeholder="Enter Origin City" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="destinationCity" placeholder="Enter Destination City" />
                </div>
                <div className="form-group">
                  <DatePicker className="form-control" id="departureDate" placeholder="Departure Date"
                    selected={startDate}
                    onChange={handleChangeStartDate}
                  />
                </div>
                <div className="form-group">
                  <DatePicker className="form-control" id="departureDate" placeholder="Departure Date"
                    selected={returnDate}
                    onChange={handleChangeEndDate}
                  />
                </div>
                <div class="form-group">
                  <select class="form-control" id="noOfPassengers">
                    <option>Select Passengers</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>

              </div>
              <div className="box-footer">
                <button type="button" name="searchBtn" id="searchBtn" className="btn btn-primary">Search</button>
              </div>
            </form>
          </div>

        </div>
        <div className="main">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Pune (PNQ) to Delhi (DEL)</h3>
              <p className="box-subtitle">10 fights found Wed, 30 October</p>
            </div>
            <div className="search-data">
              <SearchList />
              <SearchList />
              <SearchList />
            </div>
          </div>
        </div>
      </div>


      {/* <div className="footer">
        <h2>Footer</h2>
      </div> */}
    </div>
  );
}

export default App;
