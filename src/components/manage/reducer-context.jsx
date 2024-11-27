import AddTask from './reducer-context/AddTask'
import TaskList from './reducer-context/TaskList'
import { TasksProvider } from '../../context/TasksContext.js'

export default function ReducerContext() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask/>
            <TaskList />
        </TasksProvider>
    )
}

