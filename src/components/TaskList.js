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
            </div>
            <div className="tasklist-list">
                {tasks.map((task) => {
                    return <TaskBlock key={task.id} task={task} />;
                })}
                {category === "Trash" && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <button
                            style={{
                                backgroundColor: "#ff4041",
                                alignSelf: "center",
                                padding: 5,
                                width: 120,
                                border: "none",
                                borderRadius: 5,
                                color: "white",
                            }}
                            onClick={() => taskCrud.clearTrash(setAllTasks)}
                        >
                            Clear
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
