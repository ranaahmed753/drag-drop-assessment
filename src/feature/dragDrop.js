import taskCrud from "./taskCrud";

const handleDragStart = (event, taskId) => {
    event.dataTransfer.setData("text/plain", taskId.toString());
};

const handleDragOver = (event, category) => {
    event.preventDefault();
    console.log(category);
};

const handleDrop = (event, setAllTasks, category) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    const targetCategory = category.toLowerCase();
    taskCrud.updateTask(
        parseInt(taskId),
        { status: targetCategory === "todo" ? "" : targetCategory },
        setAllTasks
    );
};
const dragDrop = {
    handleDragStart,
    handleDragOver,
    handleDrop,
};
export default dragDrop;
// export default { handleDragStart, handleDragOver, handleDrop };
