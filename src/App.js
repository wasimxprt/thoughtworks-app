import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
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
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Origin City" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Destination City" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Departure Date" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Return Date" />
                </div>
                <div class="form-group">
                  <select class="form-control">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                  </select>
                </div>

              </div>
              <div className="box-footer">
                <button type="submit" className="btn btn-primary">Search</button>
              </div>
            </form>
          </div>

        </div>
        <div className="main">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Quick Example</h3>
            </div>
          </div>
        </div>
      </div>


      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
