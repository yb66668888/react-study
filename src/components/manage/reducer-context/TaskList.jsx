import { useState } from 'react'
import { Checkbox, Button, Input } from 'antd'
import { useTasks, useTasksDispatch } from '../../../context/TasksContext.js'

export default function TaskList() {
    const tasks = useTasks()
    return (
        <ul>
            {tasks.map(task => (
                <li className="li-css" key={task.id}>
                    <Task  
                        task={task}
                    />
                </li>
            ))}
        </ul>
    )
}

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useTasksDispatch()
   
    let taskContent
    if (isEditing) {
        taskContent = (
          <>
            <Input 
                className='width-300'
                value={task.text} 
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            text: e.target.value
                        }
                    })
                }}
            />
            <button onClick={() => setIsEditing(false)}>
              Save
            </button>
          </>
        );
      } else {
        taskContent = (
          <>
            {task.text}
            <button onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </>
        );
      }
    return (
        <label>
            <Checkbox checked={task.done} onChange={e => {
                dispatch({
                    type: 'changed',
                    task: {
                        ...task,
                        done: e.target.checked,
                    }
                })
            }} />
            { task.done ? 'true' : 'false' }
            { taskContent }
            <Button className="button-css" type='primary' onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: task.id
                })
            }}>Delete</Button>
        </label>
    )
}