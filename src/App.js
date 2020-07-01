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
              <h3 className="box-title">Pune (PNQ) to Delhi (DEL)</h3>
              <p className="box-subtitle">10 fights found Wed, 30 October</p>
            </div>
            <div className="search-data">
              <div className="search-list">
                <div className="dept-options">
                  <div className="dept-options-section clearfix">
                    <div className="pull-left airline-info">
                      <div className="pull-left">
                        <span className="arln-logo"></span>
                      </div>
                      <div className="pull-left airways-info-sect">
                        <p>
                          <span className="airways-name">Air India</span>
                        </p>
                        <p className="flight-code">A1-101</p>
                      </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">05:00</span>
                          </p>
                          <p className="flight-code">Pune</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">07:00</span>
                          </p>
                          <p className="flight-code">Delhi</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">02h 00m</span>
                          </p>
                          <p className="flight-code">Non Stop</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <h3 className="price">3,879</h3>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left booking-btn">
                      <button type="submit" className="btn btn-secondary">Book</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="search-list">
                <div className="dept-options">
                  <div className="dept-options-section clearfix">
                    <div className="pull-left airline-info">
                      <div className="pull-left">
                        <span className="arln-logo"></span>
                      </div>
                      <div className="pull-left airways-info-sect">
                        <p>
                          <span className="airways-name">Air India</span>
                        </p>
                        <p className="flight-code">A1-101</p>
                      </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">05:00</span>
                          </p>
                          <p className="flight-code">Pune</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">07:00</span>
                          </p>
                          <p className="flight-code">Delhi</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">02h 00m</span>
                          </p>
                          <p className="flight-code">Non Stop</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <h3 className="price">3,879</h3>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left booking-btn">
                      <button type="submit" className="btn btn-secondary">Book</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="search-list">
                <div className="dept-options">
                  <div className="dept-options-section clearfix">
                    <div className="pull-left airline-info">
                      <div className="pull-left">
                        <span className="arln-logo"></span>
                      </div>
                      <div className="pull-left airways-info-sect">
                        <p>
                          <span className="airways-name">Air India</span>
                        </p>
                        <p className="flight-code">A1-101</p>
                      </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">05:00</span>
                          </p>
                          <p className="flight-code">Pune</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">07:00</span>
                          </p>
                          <p className="flight-code">Delhi</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">02h 00m</span>
                          </p>
                          <p className="flight-code">Non Stop</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <h3 className="price">3,879</h3>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left booking-btn">
                      <button type="submit" className="btn btn-secondary">Book</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="search-list">
                <div className="dept-options">
                  <div className="dept-options-section clearfix">
                    <div className="pull-left airline-info">
                      <div className="pull-left">
                        <span className="arln-logo"></span>
                      </div>
                      <div className="pull-left airways-info-sect">
                        <p>
                          <span className="airways-name">Air India</span>
                        </p>
                        <p className="flight-code">A1-101</p>
                      </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">05:00</span>
                          </p>
                          <p className="flight-code">Pune</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">07:00</span>
                          </p>
                          <p className="flight-code">Delhi</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <p>
                            <span className="airways-name">02h 00m</span>
                          </p>
                          <p className="flight-code">Non Stop</p>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left airways-info-sect">
                          <h3 className="price">3,879</h3>
                        </div>
                    </div>
                    <div className="pull-left airline-time-box">
                      <div className="pull-left booking-btn">
                      <button type="submit" className="btn btn-secondary">Book</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
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
