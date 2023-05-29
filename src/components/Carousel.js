import React from "react";

const Carousel = ({ jsonData }) => {
  const mappedData = jsonData.map((value, index) => {
    return (
      <div className="card">
        <div className="image">
          <img width="300px" height="400px" src={value.image} alt="Furniture" />
        </div>
        <div>
          <p className="rating">
            {value.rating.rate} ({value.rating.count})
          </p>
          <p className="name">
            {value.title.length > 25
              ? `${value.title.slice(0, 25)}...`
              : value.title}
          </p>
          <p className="description">
            {value.description.length > 100
              ? `${value.description.slice(0, 100)}...`
              : value.description}
          </p>
          <p className="category">{value.category}</p>
          <p className="price">${value.price}</p>
        </div>
      </div>
    );
  });

  return <div className="card-container">{mappedData}</div>;
};

export default Carousel;
