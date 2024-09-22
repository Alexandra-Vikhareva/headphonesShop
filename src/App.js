import React from "react";
import "./styles/App.css";
import im from './images/airpods.jpg';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card_content">
          <img src={im} alt="headphones image" height='240px' width='210px'/>
          <div className="info">
            <div className="description">
              <h3 className="title">Apple BYZ S852I</h3>
              <p className="rate">4.7</p>
            </div>
            <div className="value_container">
              <p className="price">2927 Р</p>
              <button className="buy">Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
