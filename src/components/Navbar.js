import React from "react";

const Navbar = ({updateCategory}) => {
  return (
    <div className="menu">
      <div>
        <h1>Our Menu</h1>
      </div>
      <div className="menuCategory">
        <button onClick={() => updateCategory("all")}>All</button>
        <button onClick={() => updateCategory("breakfast")}>Breakfast</button>
        <button onClick={() => updateCategory("lunch")}>ALunchll</button>
        <button onClick={() => updateCategory("dinner")}>Dinner</button>
      </div>
    </div>
  );
};

export default Navbar