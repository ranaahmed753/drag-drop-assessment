const addTask = (text, setAllTasks) => {
    const newTask = {
        id: Date.now(),
        text: text,
        status: "",
    };
    setAllTasks((prevState) => [...prevState, newTask]);
};

const deleteTask = (id, setAllTasks) => {
    setAllTasks((prevState) => {
        return prevState.filter((task) => task.id !== id);
    });
};

const clearTrash = (setAllTasks) => {
    setAllTasks((prevState) => {
        return prevState.filter((task) => task.status !== "trash");
    });
};

const updateTask = (id, update, setAllTasks) => {
    setAllTasks((prevState) => {
        return prevState.map((task) => {
            if (task.id === id) {
                return { ...task, ...update };
            } else {
                return task;
            }
        });
    });
};

export default {
    addTask,
    deleteTask,
    clearTrash,
    updateTask,
};
