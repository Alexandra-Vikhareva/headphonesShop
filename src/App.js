import React from "react";
import "./styles/App.css";
import Card from "./components/Card";
import image1 from './images/S852I.jpg';
import image2 from './images/earpods1.jpg';
import image3 from './images/earpods2.jpg';


function App() {

  const headphones = [{img: image1,
                       title:'Apple BYZ S852I',
                       price:'2927',
                       rate:'4.7'},
                    
                      {img: image2,
                        title:'Apple EarPods',
                        price:'2327',
                        rate:'4.5'},
                      
                      {img: image3,
                        title:'Apple EarPods',
                        price:'2327',
                        rate:'4.5'},
                      
                      {img: image1,
                        title:'Apple BYZ S852I',
                        price:'2927',
                        rate:'4.7'},
                       
                      {img: image2,
                        title:'Apple EarPods',
                        price:'2327',
                        rate:'4.5'},
                         
                      {img: image3,
                        title:'Apple EarPods',
                        price:'2327',
                        rate:'4.5'}]

  return (
    <div className="App">
      <Card item = {{img: image1,
                     title:'Apple BYZ S852I',
                     price:'2927',
                     rate:'4.7'}}/>
    </div>
  );
}

export default App;
