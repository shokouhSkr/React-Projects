import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, people]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);

  const prevViewHandler = () => {
    setIndex(index - 1);
  };

  const nextViewHandler = () => {
    setIndex(index + 1);
  };

  return (
    <section className="section">
      {/* title */}
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>

      {/* slider */}
      <div className="section-center">
        {people.map((person, indexPerson) => {
          const { id, image, name, title, quote } = person;

          // dynamic style
          let position = "nextSlide";
          if (indexPerson === index) position = "activeSlide";
          if (indexPerson === index - 1 || (index === 0 && indexPerson === people.length - 1))
            position = "lastSlide";

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="prev" onClick={prevViewHandler}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextViewHandler}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
