import React from 'react';

const API =  "http://taskmaster-dev-1.us-west-1.elasticbeanstalk.com";


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


export default AddImage;;