import { Input, Button } from 'antd'
import React, { useState } from 'react'
import { useTasksDispatch } from '../../../context/TasksContext.js'

export default function AddTask() {
    const [text, setText] = useState('')
    const dispatch = useTasksDispatch()
    return (
        <div className='flex'>
            <Input className='width-300' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />

            <Button className="button-css" type='primary' onClick={() => {
                setText('')
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text: text
                })
            }}>Add</Button>
        </div>
    )
}

let nextId = 3