import React, { useState, useEffect } from "react";
import LocalStorage from "./feature/localStorage";
import "./App.css";
import CreateTask from "./components/CreateTask";
import taskUtils from "./feature/taskUtils";
import TaskList from "./components/TaskList";

function App() {
    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        const storedTasks = LocalStorage.loadAllTasks();
        setAllTasks(storedTasks);
    }, []);

    // useEffect(() => {
    //     LocalStorage.saveAllTasks(allTasks);
    // }, [allTasks]);

    const { noCatTasks, doingTasks, doneTasks, trashTasks } =
        taskUtils.categorizeTasks(allTasks);

    return (
        <div className="App">
            <CreateTask setAllTasks={setAllTasks} />
            <div className="lists-container">
                <TaskList
                    category="Todo"
                    tasks={noCatTasks}
                    setAllTasks={setAllTasks}
                />
                <TaskList
                    category="Doing"
                    tasks={doingTasks}
                    setAllTasks={setAllTasks}
                />
                <TaskList
                    category="Done"
                    tasks={doneTasks}
                    setAllTasks={setAllTasks}
                />
                <TaskList
                    category="Trash"
                    tasks={trashTasks}
                    setAllTasks={setAllTasks}
                />
            </div>
        </div>
    );
}

export default App;
