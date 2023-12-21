/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

function AddTaskModal({ isOpen, onRequestClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const newData = { ...data, phase: "todo" };
    try {
      await axios.post("http://localhost:5000/tasks", newData);
      toast.success("Task added successfully!");
      onRequestClose();
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Error adding task. Please try again.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Task Modal"
      style={customStyles}
    >
      <div className="px-6 py-6 lg:w-[30vw] w-[70vw] lg:h-[70vh] bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-10">
            <label className="block text-sm font-medium text-gray-600">
              Title:
            </label>
            <input
              {...register("title", { required: true })}
              placeholder="eg... Take Coffe Break"
              className="form-input border-2 rounded-lg px-2 py-2 w-full border-slate-500 placeholder:text-slate-400 placeholder:text-sm"
            />
          </div>

          <div className="mb-10">
            <label className="block text-sm font-medium text-gray-600">
              Description:
            </label>
            <textarea
              {...register("description")}
              placeholder="eg... Its always good to take a break..."
              className="form-textarea border-2 rounded-lg px-2 py-2 w-full border-slate-500 placeholder:text-slate-400 placeholder:text-sm"
            />
          </div>

          <div className="mb-10">
            <label className="block text-sm font-medium text-gray-600">
              Deadline:
            </label>
            <input
              type="date"
              {...register("deadline")}
              className="form-input border-2 rounded-lg px-2 py-2 w-fit border-slate-500 "
            />
          </div>

          <div className="mb-10">
            <label className="block text-sm font-medium text-gray-600 ">
              Priority:
            </label>
            <select
              {...register("priority")}
              className="form-select border-2 rounded-lg px-2 py-2 w-fit border-slate-500 "
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#5f62e7] text-slate-200 px-4 py-4 rounded-md hover:bg-[#b6b7f0] hover:text-slate-600"
          >
            Add Task
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddTaskModal;
