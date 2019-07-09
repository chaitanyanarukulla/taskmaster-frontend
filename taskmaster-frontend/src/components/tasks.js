import React, {useState, useEffect} from 'react';
const API =   "http://taskmaster-dev-1.us-west-1.elasticbeanstalk.com/";

function Tasks(){
  const [tasks, setTasks] = useState([])
  const _getTasks = () => {
    fetch( API + "/tasks", { mode : 'cors'})
    .then(data => data.json())
    .then(task => setTasks(task))
    .catch(console.error);
  }
  useEffect(_getTasks, []);
  return (
    <>
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Assignee</th>
          <th>Status</th>
          <th>Pic</th>
        </tr>
        {tasks.map( (task) =>
          <tr id="task" key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.assignee}</td>
            <td>{task.status}</td>
            <td>{task.pic}</td>
          </tr>
          )}
      </tbody>

    </table>
    </>
  );
}

function Task() {
  return (
    <>
      <header>This is the Task Master!</header>
      <main>
        <Tasks />
      </main>
      <footer>&copy; 2019 Chai</footer>
     </>
  );
}

class AddImage extends React.Component{
  render(){
    return(
      <form action={`${API}/${this.props.id}/images`} method="post" encType="multipart/form-data">
        <input name="file" type="file"></input>
        <input name="submit" type="submit"></input>
      </form>
    )
  }
}

export default Tasks;