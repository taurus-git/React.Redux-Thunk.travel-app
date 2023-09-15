import React from 'react';
import { useSelector } from "react-redux";
import FlightListItem from "../FlightListItem/FlightListItem";

const FlightList = () => {
    const flightsData = useSelector( state => state.flightsData );
    const { origin, destination } = useSelector( state => state.cityNameInput )

    const renderCity = ( cityData ) => {
        const [cityName, cityCode] = Object.entries( cityData )[0];

        return (
            <p><b>{ cityName }</b> <span>({ cityCode })</span></p>
        )
    }

    if ( !flightsData || flightsData.length === 0 ) {
        return null;
    }

    return (
        <div className="container">
            <div className="flight-list">
                <h1>Select flights</h1>
                <div className="flight-header">
                    { renderCity( origin ) }
                    { renderCity( destination ) }
                </div>
                <div className="flight-list__list">
                    { flightsData.prices.map( ( flight ) => (
                    <FlightListItem key={flight.destination + flight.distance + flight.depart_date} flight={ flight }/>
                ) ) }
                </div>
            </div>
        </div>
    );
};

export default FlightList;
