import React from "react";
import TaskBlock from "./TaskBlock";
import dragDrop from "../feature/dragDrop";
import taskCrud from "../feature/taskCrud";

export default function TaskList({ category, tasks, setAllTasks }) {
    return (
        <div
            className="tasklist-container"
            onDragOver={(event) => dragDrop.handleDragOver(event, category)}
            onDrop={(event) =>
                dragDrop.handleDrop(event, setAllTasks, category)
            }
        >
            <div className="tasklist-header">
                <h2 className="tasklist-title">{category}</h2>
                {category === "Trash" && (
                    <div>
                        <button
                            onClick={() => taskCrud.clearTrash(setAllTasks)}
                        >
                            Clear
                        </button>
                    </div>
                )}
            </div>
            <div className="tasklist-list">
                {tasks.map((task) => {
                    return <TaskBlock key={task.id} task={task} />;
                })}
            </div>
        </div>
    );
}
