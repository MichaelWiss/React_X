import React from "react";

class AddFishForm extends React.Component {
	createFish = event => {

		event.preventDefault();
		console.log("Making a fish");
	}; 
	render() {
       return (
       <form className="fish-edit" onSubmit={this.createFish} >
         <input name="name" placeholder="Name" />
         <input name="price" placeholder="Price" />
         <select name="status">
           <option value="available">Fresh!</option>
           <option value="unavailable">Sold Out!</option>
         </select> 
         <textarea name="desc" placeholder="Desc" />
         <input name="image" placeholder="Image" />
         <button type="submit">+ Add Fish</button>
        </form> 
       	);
	}
}






export default AddFishForm;