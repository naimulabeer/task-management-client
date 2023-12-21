import AddTaskButton from "../../components/Task/AddTaskButton";
import TaskShow from "../../components/Task/TaskShow";
import { ToastContainer } from "react-toastify";

function TaskPage() {
  return (
    <div className="h-screen px-2 py-6 bg-[#bcc9ed]">
      <ToastContainer />
      <AddTaskButton />
      <TaskShow />
    </div>
  );
}

export default TaskPage;
