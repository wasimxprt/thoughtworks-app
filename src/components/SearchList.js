import React, { useState } from 'react';


function SearchList(props) {

    const { flight } = props;


    return (
        <div>
            <div className="search-list">
                <div className="dept-options">
                    <div className="dept-options-section clearfix">
                        <div className="pull-left airline-info">
                            <div className="pull-left">
                                <span className="arln-logo"></span>
                            </div>
                            <div className="pull-left airways-info-sect">
                                <p>
                                    <span className="airways-name">{flight.name}</span>
                                </p>
                                <p className="flight-code">{flight.flightNo}</p>
                            </div>
                        </div>
                        <div className="pull-left airline-time-box">
                            <div className="pull-left airways-info-sect">
                                <p>
                                    <span className="airways-name">{flight.departureTime}</span>
                                </p>
                                <p className="flight-code">{flight.origin}</p>
                            </div>
                        </div>
                        <div className="pull-left airline-time-box">
                            <div className="pull-left airways-info-sect">
                                <p>
                                    <span className="airways-name">{flight.arrivalTime}</span>
                                </p>
                                <p className="flight-code">{flight.destination}</p>
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
                                <h3 className="price">{flight.price}</h3>
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
    );
}

export default SearchList;