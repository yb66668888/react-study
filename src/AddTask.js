import { useState } from "react";

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState("")
    return (
        <>
            <input 
                placeholder="Add a task" 
                value={text}
                nChange={(e) => setText(e.target.value)} 
            />
            <button 
                onClick={() => {
                    onAddTask(text)
                    setText("")
                }}
            >
                Add
            </button>
        </>
    )
}