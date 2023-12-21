import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddTaskModal from "./AddTaskModal"; // Import your AddTaskModal component

function AddTaskButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="text-right">
      <button
        onClick={openModal}
        className="bg-[#5f62e7] text-slate-200 px-4 py-4 inline-flex gap-2 items-center justify-end rounded-full"
      >
        <FaPlus /> Add New Task
      </button>

      <AddTaskModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default AddTaskButton;
