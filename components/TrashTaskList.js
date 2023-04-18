import React from "react";
import TaskList from "./TaskList";

export default function TrashTaskList({ category, tasks, setAllTasks }) {
    return (
        <div className="trashTaskList-container">
            <TaskList
                category="Trash"
                tasks={tasks}
                setAllTasks={setAllTasks}
            />
        </div>
    );
}
