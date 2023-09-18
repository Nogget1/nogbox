import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {

  return (
      <Link className="card" to={`/beer/${data.id}`}>
        <h3>{data.name}</h3>
        <p>{data.tagline}</p>
        <img src={data.image_url} alt="beer-detail" />
      </Link>
  );
};

export default Card;