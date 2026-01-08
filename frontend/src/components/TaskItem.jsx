function TaskItem({ task, removeTask, toggleStatus }) {
  const isCompleted = task.status === "Completed";

  const formatIndianDate = (dateString) => {
    const date = new Date(dateString);
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  };

  return (
    <div className="bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition flex justify-between">
      <div className="flex gap-3">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggleStatus(task)}
          className="mt-1 accent-indigo-600"
        />

        <div>
          <h3
            className={`text-lg font-semibold ${
              isCompleted ? "line-through text-gray-400" : "text-red-800"
            }`}
          >
            {task.title}
          </h3>

          {task.description && (
            <p className="text-sm text-voilet-800">{task.description}</p>
          )}

          <div className="text-xs mt-2 flex gap-2">
            <span
              className={`px-2 py-1 rounded-full font-medium ${
                isCompleted
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {task.status}
            </span>

            <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700">
              {task.priority}
            </span>

            <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600">
              Due: {formatIndianDate(task.dueDate)}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => removeTask(task._id)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
