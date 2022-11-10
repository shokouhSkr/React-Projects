import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, onDelete }) => {
  const [readMoreMood, setReadMoreMood] = useState(true);

  const readMoreHandler = () => {
    setReadMoreMood(!readMoreMood);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMoreMood ? `${info.substring(0, 250)}...` : info}
          <button onClick={readMoreHandler}>{readMoreMood ? "read more" : "show less"}</button>
        </p>
        <button className="delete-btn" onClick={() => onDelete(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
