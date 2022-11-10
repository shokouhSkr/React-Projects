import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  return (
    <main className="container">
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
