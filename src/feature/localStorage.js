const saveAllTasks = (data) => {
    const dataString = JSON.stringify(data);
    localStorage.setItem("all_tasks", dataString);
};

const loadAllTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("all_tasks") || "[]");
    return storedTasks;
    // return JSON.parse(localStorage.getItem("all_tasks"));
};

const LocalStorage = {
    saveAllTasks,
    loadAllTasks,
};
export default LocalStorage;
// export default {
//     saveAllTasks,
//     loadAllTasks,
// };
