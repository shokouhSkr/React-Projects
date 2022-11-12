import React, { useState } from "react";
import data from "./data";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState([]);

  const changeNumberHandler = (e) => {
    setNumber(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    // Because typeof value we get from input is always always 'string'.
    if (+number < 2) {
      setText([data[0]]);
      return;
    }
    if (+number > data.length - 1) {
      setText(data);
      return;
    }
    setText(data.slice(0, +number));
  };

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>

      <form className="lorem-form" onSubmit={submitFormHandler}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={number}
          onChange={changeNumberHandler}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
