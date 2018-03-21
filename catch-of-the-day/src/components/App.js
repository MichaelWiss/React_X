import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";


class App extends React.Component {
  state = {
     fishes: {},
     order: {}
  };
  addFish = fish => {
    //take a copy of the existing state
    const fishes = { ...this.state.fishes };
    //add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //set new fishes object to state
    this.setState({ fishes });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }
  render() {
   	  return (
       <div className="catch-of-the-day">
       <div className="menu">
         <Header tagline="FRESH Seafood Market"/>
         <ul className="fishes">
         </ul>
       </div>
          <Order />
          <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} 
          />
       </div>
   	  	);
   }
};

export default App;