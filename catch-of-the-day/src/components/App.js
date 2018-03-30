import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";


class App extends React.Component {
  state = {
     fishes: {},
     order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    console.log(localStorageRef);
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
      );
  }


  componentWillUnmount() {
    base.removeBinding(this.ref);
  }




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
  };

  addToOrder = (key) => {
     //take a copy of state
     const order = { ...this.state.order };
     //add to order or update the number of order
     order[key]= order[key] + 1 || 1;
     //call set state to update state
     this.setState({ order });
  };


  render() {
   	  return (
       <div className="catch-of-the-day">
       <div className="menu">
         <Header tagline="FRESH Seafood Market"/>
         <ul className="fishes">
         {Object.keys(this.state.fishes).map(key => (
           <Fish 
             key={key} 
             index={key}
             details={this.state.fishes[key]} 
             addToOrder={this.addToOrder} 
           />
         ))}
        </ul>
       </div>
          <Order fishes={this.state.fishes} order={this.state.order} />
          <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} 
          />
       </div>
   	  	);
   }
};

export default App;