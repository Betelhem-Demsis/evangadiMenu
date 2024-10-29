import React from 'react';
import './commonResource/style.css';
import FoodItem from './components/FoodItems'
import menu from './commonResource/data';

class App extends React.Component {
  render() {
    return (
      <div className="all-container">
        <header className="title">
          <h1>Evangadi Menu</h1>
        </header>
        <div className="foods-container">
          {menu.map((food) => (
            <FoodItem
              key={food.id}  
              image={food.img}
              title={food.title}
              price={`$${food.price}`}
              description={food.desc}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
