import React, {useState, useEffect} from 'react';
import AddImage from './upload';


const API =  "http://taskmaster-dev-1.us-west-1.elasticbeanstalk.com";


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
           <th>Pictures</th>
        </tr>
        {tasks.map( (task) =>
          <tr id="task" key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.assignee}</td>
            <td>{task.status}</td>
             <td>{task.pic}</td>
            <td><AddImage id={task.id}/></td>
          </tr>
          )}
      </tbody>
    </table>

    </>
  );
}

export default Tasks;