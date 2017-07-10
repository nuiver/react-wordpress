import React from 'react';


const EventDetail = props => (
  <div>
    <h1>Detailpagina</h1>
    <h1>{props.match.params.eventId}</h1>
  </div>
);

export default EventDetail;
