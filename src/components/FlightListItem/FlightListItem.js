import React from 'react';

const FlightListItem = ( { flight } ) => {
    const { depart_date, link, gate: tiketSaler, price } = flight;

    function extractTimeZone( dateString ) {
        const match = dateString.match( /([+-]\d{2}):(\d{2})$/ );
        if ( match ) {
            const hours = match[1];
            const minutes = match[2];
            return `UTC${ hours }:${ minutes }`;
        }
        return 'UTC';
    }

    const formatDate = ( dateString ) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const date = new Date( dateString );
        const dayName = days[date.getUTCDay()];
        const day = date.getUTCDate();
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear();
        const utc = extractTimeZone( dateString );

        return `${ dayName }, ${ day } ${ month } ${ year } ${ utc }`;
    }

    const departDate = formatDate( depart_date );

    const ticketLink = " https://www.aviasales.com" + link;

    return (
        <div className="flight-list__list-item">
            <p>{ "depart_date: " + departDate }</p>
            <a href={ ticketLink } target="_blank">Ticket link</a>
            <p>Ticket fount at: { tiketSaler }</p>
            <span>{ price } €</span>
        </div>
    );
}

export default FlightListItem;
