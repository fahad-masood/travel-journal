import React from "react";

// location: "Japan",
//     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//     startDate: "12 Jan, 2021",
//     endDate: "24 Jan, 2021",
//     description:
//       "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//     imageUrl: "https://source.unsplash.com/WLxQvbMyfas",

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        className="card-image"
        src={props.imageUrl}
        alt="DestinationImage"
        srcset=""
      />
      <div className="content">
        <div className="card-location">
          <h5 className="location">📍 {props.location}</h5>
          <p className="map" onClick={props.googleMapsUrl}>
            View on Google Maps
          </p>
        </div>
        <h3 className="title">{props.title}</h3>
        <p className="date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};
