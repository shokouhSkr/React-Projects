import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <div className="title">
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} />
      ))}
    </div>
  );
};

export default Tours;
