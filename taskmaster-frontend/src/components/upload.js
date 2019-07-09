import React from 'react';

const API =   "http://localhost:5000";

class AddImage extends React.Component{
  render(){
    return(
      <form action={API + "/tasks/"  + this.props.id + "/images"} method="post" encType="multipart/form-data">
        <input name="file" type="file"></input>
        <input name="submit" type="submit"></input>
      </form>
    )
  }
}

export default AddImage;