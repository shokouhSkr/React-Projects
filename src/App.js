import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js"; // new Values() returns a list

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#f15090").all(10));
  const [isError, setIsError] = useState(false);

  const changeHandler = (e) => {
    setIsError(false);
    setColor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      const colors = new Values(color).all(10); // colors returns an array
      setList(colors);
    } catch (error) {
      // This error comes from the library, it checks the input values itself.
      setIsError(true);
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="#f15060"
            value={color}
            onChange={changeHandler}
            className={`${isError ? "error" : null}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => {
          console.log(color);

          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />;
        })}
      </section>
    </>
  );
}

export default App;
