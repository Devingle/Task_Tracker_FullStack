import TaskItem from "./TaskItem";

function TaskList({ tasks, removeTask, toggleStatus }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        <p className="text-lg">No tasks found 🚀</p>
        <p className="text-sm">Try adding a new task</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          removeTask={removeTask}
          toggleStatus={toggleStatus}
        />
      ))}
    </div>
  );
}

export default TaskList;
