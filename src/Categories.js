import React from "react";

const Categories = ({ onFilterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          key={index}
          type="button"
          className="filter-btn"
          onClick={() => onFilterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
