import LocalStorage from "../feature/localStorage";
const addTask = (text, setAllTasks) => {
    const newTask = {
        id: Date.now(),
        text: text,
        status: "",
    };
    // setAllTasks((prevState) => [...prevState, newTask]);
    setAllTasks((prevState) => {
        let list = [...prevState, newTask];
        LocalStorage.saveAllTasks(list);
        return list;
    });
};

const deleteTask = (id, setAllTasks) => {
    setAllTasks((prevState) => {
        return prevState.filter((task) => task.id !== id);
    });
};

const clearTrash = (setAllTasks) => {
    setAllTasks((prevState) => {
        // return prevState.filter((task) => task.status !== "trash");
        const fTask = prevState.filter((task) => task.status !== "trash");
        LocalStorage.saveAllTasks(fTask);
        return fTask;
    });
};

const updateTask = (id, update, setAllTasks) => {
    setAllTasks((prevState) => {
        // return prevState.map((task) => {
        //     if (task.id === id) {
        //         return { ...task, ...update };
        //     } else {
        //         return task;
        //     }
        // });

        const mTask = prevState.map((t) => {
            if (t.id === id) {
                return { ...t, ...update };
            }
            return t;
        });
        LocalStorage.saveAllTasks(mTask);
        return mTask;
    });
};

export default {
    addTask,
    deleteTask,
    clearTrash,
    updateTask,
};
