import React from 'react';

class FoodItem extends React.Component {
  render() {
    const { image, title, price, description } = this.props;

    return (
      <div className="single-food">
        <div className="img">
          <img alt={title} src={image} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">{description}</div>
      </div>
    );
  }
}

export default FoodItem;

