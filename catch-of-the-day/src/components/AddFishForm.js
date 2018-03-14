import React from "react";

class AddFishForm extends React.Component {
	render() {
       return (
       <form>
         <input name="name" placeholder="Name" />
         <input name="price" placeholder="Price" />
         <input name="status" placeholder="Status" /> 
         <input name="desc" placeholder="Desc" />
         <input name="image" placeholder="Image" />
        </form> 
       	);
	}
}






export default AddFishForm;