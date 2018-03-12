import React from 'react'; 
import { getFunName } from "../helpers";


class StorePicker extends React.Component {
	

	myInput = React.createRef();


	goToStore = (event) => {
		event.preventDefault();
		//stop form from submitting
		console.log('Going to store');
		//get text
		console.log(this.myInput);
		//change the page to /store//whatever-they-entered

	}
	render() {
		console.log(this);
		return (
		<form className="store-selector" onSubmit={this.goToStore}>
		  <h2>Please enter a store</h2>
		  <input 
		     type="text"
		     ref={this.myInput} 
		     required 
		     placeholder="Store Name"
             defaultValue={getFunName()}
		     />
		  <button type="submit">Visit Store →</button>
		</form>
	  )	
	} 
}

export default StorePicker;