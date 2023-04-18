import React from "react";
import todoCrud from "../feature/taskCrud";

export default function CreateTask({ setAllTasks }) {
    const [taskText, setTaskText] = React.useState("");

    const handleChange = (event) => {
        setTaskText(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        todoCrud.addTask(taskText, setAllTasks);
    };

    return (
        <div className="createTask-container">
            <input
                className="createTask-input"
                placeholder="Enter Todo text"
                value={taskText}
                onChange={handleChange}
            />
            <button
                className="createTask-btn"
                type="button"
                onClick={handleSubmit}
            >
                Create Task
            </button>
        </div>
    );
}
