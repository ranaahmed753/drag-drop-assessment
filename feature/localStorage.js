const saveAllTasks = (data) => {
    const dataString = JSON.stringify(data);
    localStorage.setItem("all_tasks", dataString);
};

const loadAllTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    return storedTasks;
};

export default {
    saveAllTasks,
    loadAllTasks,
};
