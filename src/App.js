import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchPanel from './components/SearchPanel';
import NoDataComponent from './components/NoDataComponent';
import Autocomplete from "react-autocomplete"

function App() {

  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date().setDate(new Date().getDate() + 1));
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOneWay, setIsOneWay] = useState(true);

  const cities = [
    { id: 1, label: 'Pune (PNQ)' },
    { id: 2, label: 'Mumbai (BOM)' },
    { id: 3, label: 'Bengaluru (BLR)' },
    { id: 4, label: 'Delhi (DEL)' }
  ]

  const menuStyle = {
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: '#ffffff',
    padding: '10px 5px',
    fontSize: '14px',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '50%',
    height: 'auto',
    zIndex: '10'
  }

  const handleChangeStartDate = date => {
    setStartDate(date)
  };

  const handleChangeEndDate = date => {
    setReturnDate(date)
  };

  const handleSearch = () => {
    setIsLoading(true);
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
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Flight Search App</h1>
      </div>
      <div className="row">
        <div className="side">
          <div className="box">

            <div class="tab">
              <button class={`tablinks ${isOneWay ? 'active' : ''}`} onClick={e => setIsOneWay(true)} >One Way</button>
              <button class={`tablinks ${!isOneWay ? 'active' : ''}`} onClick={e => setIsOneWay(false)}>Return</button>
            </div>



            {/* <div className="box-header">
              <h3 className="box-title">One Way</h3>
            </div> */}
            <form role="form" autocomplete="off">
              <div className="box-body">
                <div className="form-group">

                  <Autocomplete
                    inputProps={{
                      "class": "form-control",
                      "placeholder": "Enter Origin City",
                      "id": "originCity",
                      "name": "originCity",
                      "autoComplete": "off"
                    }}
                    wrapperStyle={{
                      width: "100%"
                    }}
                    items={cities}
                    menuStyle={menuStyle}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                      <div
                        key={item.id}
                        className="item-list"
                        style={{ backgroundColor: highlighted ? '#4095bf' : 'transparent' }}
                      >
                        <span>{item.label}</span>
                      </div>
                    }
                    value={originCity}
                    onChange={e => setOriginCity(e.target.value)}
                    onSelect={value => setOriginCity(value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">


                  <Autocomplete
                    inputProps={{
                      "class": "form-control",
                      "placeholder": "Enter Destination City",
                      "id": "destinationCity",
                      "name": "destinationCity",
                      "autoComplete": "off"
                    }}
                    wrapperStyle={{
                      width: "100%"
                    }}
                    items={cities}
                    menuStyle={menuStyle}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                      <div
                        key={item.id}
                        className="item-list"
                        style={{ backgroundColor: highlighted ? '#4095bf' : 'transparent' }}
                      >
                        <span>{item.label}</span>
                      </div>
                    }
                    value={destinationCity}
                    onChange={e => setDestinationCity(e.target.value)}
                    onSelect={value => setDestinationCity(value)}
                    className="form-control"
                  />

                </div>
                <div className="form-group">
                  <DatePicker className="form-control" id="departureDate" placeholder="Departure Date"
                    selected={startDate}
                    onChange={handleChangeStartDate}
                    dateFormat="yyyy/MM/dd"
                  />
                </div>
                {!isOneWay &&  <div className="form-group">
                  <DatePicker className="form-control" id="departureDate" placeholder="Departure Date"
                    selected={returnDate}
                    onChange={handleChangeEndDate}
                  />
                </div> }
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
            startDate={startDate} /> : <NoDataComponent />}

        </div>
      </div>


      {/* <div className="footer">
        <h2>Footer</h2>
      </div> */}
    </div>
  );
}

export default App;
