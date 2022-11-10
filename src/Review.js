import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  // console.log(people);
  const { name, job, image, text } = people[index];

  const checkIndex = (index) => {
    if (index > people.length - 1) return 0;
    if (index < 0) return people.length - 1;
    return index;
  };

  const previewHandler = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const nextHandler = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>

      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={previewHandler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextHandler}>
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn">suprise me</button>
    </article>
  );
};

export default Review;
