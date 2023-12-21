import { useState, useEffect } from "react";
import axios from "axios";
import TaskDetailsModal from "./TaskDetailsModal";

function TaskShow() {
  const [tasks, setTasks] = useState({ todo: [], ongoing: [], completed: [] });
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tasks");
        const { data } = response;

        const groupedTasks = data.reduce(
          (acc, task) => {
            acc[task.phase].push(task);
            return acc;
          },
          { todo: [], ongoing: [], completed: [] }
        );

        setTasks(groupedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const openModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  const handleDelete = (taskId) => {
    // Implement the logic to remove the task from state
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      Object.keys(updatedTasks).forEach((phase) => {
        updatedTasks[phase] = updatedTasks[phase].filter(
          (task) => task._id !== taskId
        );
      });
      return updatedTasks;
    });
  };

  return (
    <div className="mt-10 px-2 py-4 flex flex-col lg:flex-row justify-evenly">
      {/* TODO List */}
      <div className="">
        <h3 className="font-bold mb-4">Todo</h3>
        {tasks.todo.map((task) => (
          <div
            key={task._id}
            className="block w-full mb-4 cursor-pointer"
            onClick={() => openModal(task)}
          >
            <div className="w-[280px] first:my-5 rounded-lg bg-white text-[#635fc7] py-6 px-3 shadow-lg hover:text-[#635fc7]">
              <h4 className="text-lg font-semibold mb-2">{task.title}</h4>
              <span className="text-sm font-medium px-2 py-1 bg-blue-500 text-white rounded-md">
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Ongoing List */}
      <div className="">
        <h3 className="text-lg font-bold mb-4">Ongoing</h3>
        {tasks.ongoing.map((task) => (
          <div
            key={task._id}
            className="block w-full mb-4 cursor-pointer dark:hover:text-[#635fc7]"
            onClick={() => openModal(task)}
          >
            <div className="w-[280px] first:my-5 rounded-lg bg-white text-[#635fc7] py-6 px-3 shadow-lg hover:text-[#635fc7]">
              <h4 className="text-lg font-semibold mb-2">{task.title}</h4>
              <span className="text-sm font-medium px-2 py-1 bg-yellow-500 text-white rounded-md">
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Completed List */}
      <div className="">
        <h3 className="text-lg font-bold mb-4">Completed</h3>
        {tasks.completed.map((task) => (
          <div
            key={task._id}
            className="block w-full mb-4 cursor-pointer dark:hover:text-[#635fc7]"
            onClick={() => openModal(task)}
          >
            <div className="w-[280px] first:my-5 rounded-lg bg-white text-[#635fc7] py-6 px-3 shadow-lg hover:text-[#635fc7]">
              <h4 className="text-lg font-semibold mb-2">{task.title}</h4>
              <span className="text-sm font-medium px-2 py-1 bg-green-500 text-white rounded-md">
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Task Details Modal */}
      <TaskDetailsModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        task={selectedTask}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default TaskShow;
