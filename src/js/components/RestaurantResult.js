import React from "react";

import "./RestaurantResult.css";

export const RestaurantResult = (props) => {
  console.log("HERE");
  console.log(props.restaurant);
  console.log(JSON.stringify(props.restaurant));
  const { restaurant } = props;
  const {
    image_url: imageUrl,
    name,
    url,
    rating,
    price,
    location,
  } = restaurant;
  const { display_address: displayAddress } = location;
  const address = displayAddress.join(" ");
  const openUrl = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="restaurant-card" onClick={openUrl}>
      <img src={imageUrl}></img>
      <p className="title">{name}</p>
      <div className="details">
        <p>{price}</p>
        <p>{`${rating} / 5.0 rating`}</p>
      </div>
      <div>{address}</div>
    </div>
  );
};
