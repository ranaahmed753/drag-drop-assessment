import React from "react";
import dragDrop from "../feature/dragDrop";

export default function TaskBlock({ task }) {
    const { id, text, status } = task;
    return (
        <div
            draggable={true}
            onDragStart={(event) => dragDrop.handleDragStart(event, id)}
            className="task-container"
        >
            <p className="task-text">{text}</p>
        </div>
    );
}
