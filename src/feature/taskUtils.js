const categorizeTasks = (allTasks) => {
    const noCatTasks = allTasks.filter((task) => task.status === "");
    const doingTasks = allTasks.filter((task) => task.status === "doing");
    const doneTasks = allTasks.filter((task) => task.status === "done");
    const trashTasks = allTasks.filter((task) => task.status === "trash");

    return {
        noCatTasks,
        doingTasks,
        doneTasks,
        trashTasks,
    };
};

const taskUtils = {
    categorizeTasks,
};

export default taskUtils;
// export default {
//     categorizeTasks,
// };
