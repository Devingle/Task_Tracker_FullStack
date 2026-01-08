import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import { getTasks, createTask, deleteTask, updateTask } from "./services/api";
import toast from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch {
      toast.error("Failed to load tasks");
    }
  };

  const addTask = async (task) => {
    try {
      const res = await createTask(task);
      setTasks([...tasks, res.data]);
      toast.success("Task added");
    } catch {
      toast.error("Failed to add task");
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
      toast.success("Task deleted");
    } catch {
      toast.error("Failed to delete task");
    }
  };

  const toggleStatus = async (task) => {
    try {
      const updated = {
        ...task,
        status: task.status === "Pending" ? "Completed" : "Pending",
      };
      const res = await updateTask(task._id, updated);
      setTasks(tasks.map((t) => (t._id === task._id ? res.data : t)));
    } catch {
      toast.error("Failed to update status");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = statusFilter === "All" || task.status === statusFilter;
    const priorityMatch =
      priorityFilter === "All" || task.priority === priorityFilter;
    return statusMatch && priorityMatch;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Task Tracker
        </h1>

        <TaskForm addTask={addTask} />

        <Filters
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <TaskList
          tasks={sortedTasks}
          removeTask={removeTask}
          toggleStatus={toggleStatus}
        />

        {/* Footer */}
        <footer className="mt-10 pt-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Developed with ❤️ by{" "}
            <span className="font-semibold text-indigo-600">
              Devingle (Amit Ghanata)
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
