import React from "react";

class EditFishForm extends React.Component {
	render() {
		return (
         <div className="fish-edit">
           <input type="text" name="name" />
           <input type="text" name="price" />
           <select type="text" name="status" /select>
           <input type="text" name="desc" />
           <input type="text" name="image" />
        </div>
       );
	}
}

export default EditFishForm;
