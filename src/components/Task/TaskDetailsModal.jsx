/* eslint-disable react/prop-types */

import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function TaskDetailsModal({
  isOpen,
  onRequestClose,
  task,

  onDelete,
}) {
  const handleDelete = async () => {
    // Implement the delete logic
    try {
      await axios.delete(`http://localhost:5000/tasks/${task._id}`);
      onRequestClose();
      onDelete(task._id);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Task Details Modal"
      style={customStyles}
    >
      <div className="px-6 py-6 lg:w-[30vw] w-[70vw] lg:h-[50vh] bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 ">Task Details</h2>

        <div className="flex flex-col gap-4 text-lg">
          <p>Title: {task?.title}</p>
          <p>Description: {task?.description}</p>
          <p>Deadline: {task?.deadline}</p>
          <div className="badge badge-accent">
            <p>Priority: {task?.priority}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete Task
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default TaskDetailsModal;
