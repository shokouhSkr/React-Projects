import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [friends, setFriends] = useState(data);

  const clearListHandler = () => {
    setFriends([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{friends.length} birthdays today</h3>

        <List friends={friends} />

        <button type="button" onClick={clearListHandler}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
