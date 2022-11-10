import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, onDelete }) => {
  return (
    <div className="title">
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Tours;
