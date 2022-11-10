import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItemsHandler = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  // Uniqe categories
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  return (
    <main className="container">
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories onFilterItems={filterItemsHandler} categories={allCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
