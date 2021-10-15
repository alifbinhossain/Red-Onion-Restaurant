import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="mb-4">Best food waiting for your belly</h1>
        <div className="banner__content--search-box">
          <input
            className="banner__content--input-search"
            type="text"
            placeholder="search your food"
          />
          <button className="btn-search">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
