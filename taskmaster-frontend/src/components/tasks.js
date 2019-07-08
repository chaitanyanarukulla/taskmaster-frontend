import React, {useState, useEffect} from 'react';
const API =   "http://localhost:5000";

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
        </tr>
        {tasks.map( (task) =>
          <tr id="task" key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.assignee}</td>
            <td>{task.status}</td>
          </tr>
          )}
      </tbody>

    </table>
    </>
  );
}

export default Tasks;