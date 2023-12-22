import { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskDetailsModal from "./TaskDetailsModal";

function TaskShow() {
  const [tasks, setTasks] = useState({ todo: [], ongoing: [], completed: [] });
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://task-management-server-liart.vercel.app/tasks"
        );
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
  }, [tasks]);

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

  const getCount = (phase) => {
    return tasks[phase].length;
  };

  return (
    <DragDropContext
      // Update the onDragEnd function inside DragDropContext
      onDragEnd={(result) => {
        if (!result.destination) {
          return; // Dragged outside of droppable area
        }

        const sourcePhase = result.source.droppableId;
        const destinationPhase = result.destination.droppableId;
        const movedTask = tasks[sourcePhase][result.source.index];

        // Remove the task from the source phase
        const updatedTasks = { ...tasks };
        updatedTasks[sourcePhase] = tasks[sourcePhase].filter(
          (task) => task._id !== movedTask._id
        );

        // Insert the task into the destination phase
        updatedTasks[destinationPhase] = [
          ...tasks[destinationPhase].slice(0, result.destination.index),
          movedTask,
          ...tasks[destinationPhase].slice(result.destination.index),
        ];

        setTasks(updatedTasks);
      }}
    >
      <div className="mt-10 px-2 py-4 flex flex-col lg:flex-row justify-evenly">
        {/* TODO List */}
        <Droppable droppableId="Todo">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h3 className="text-lg font-bold mb-4">
                👍 Todo ({getCount("todo")})
              </h3>
              {tasks.todo.map((task, index) => (
                <Draggable key={task._id} draggableId={task._id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="block w-full mb-4 cursor-pointer"
                      onClick={() => openModal(task)}
                    >
                      <div className="w-[280px] first:my-5 rounded-lg bg-white text-[#635fc7] py-6 px-3 shadow-lg hover:text-[#635fc7]">
                        <h4 className="text-lg font-semibold mb-2">
                          {task.title}
                        </h4>
                        <span className="text-sm font-medium px-2 py-1 bg-blue-500 text-white rounded-md">
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Ongoing List */}
        <Droppable droppableId="Ongoing">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h3 className="text-lg font-bold mb-4">
                ☢ Ongoing ({getCount("ongoing")})
              </h3>
              {tasks.ongoing.map((task, index) => (
                <Draggable key={task._id} draggableId={task._id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="block w-full mb-4 cursor-pointer dark:hover:text-[#635fc7]"
                      onClick={() => openModal(task)}
                    >
                      <div className="w-[280px] first:my-5 rounded-lg bg-white text-[#635fc7] py-6 px-3 shadow-lg hover:text-[#635fc7]">
                        <h4 className="text-lg font-semibold mb-2">
                          {task.title}
                        </h4>
                        <span className="text-sm font-medium px-2 py-1 bg-yellow-500 text-white rounded-md">
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Completed List */}
        <Droppable droppableId="Completed">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h3 className="text-lg font-bold mb-4">
                ✅ Completed ({getCount("completed")})
              </h3>
              {tasks.completed.map((task, index) => (
                <Draggable key={task._id} draggableId={task._id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="block w-full mb-4 cursor-pointer dark:hover:text-[#635fc7]"
                      onClick={() => openModal(task)}
                    >
                      <div className="w-[280px] first:my-5 rounded-lg bg-white text-[#635fc7] py-6 px-3 shadow-lg hover:text-[#635fc7]">
                        <h4 className="text-lg font-semibold mb-2">
                          {task.title}
                        </h4>
                        <span className="text-sm font-medium px-2 py-1 bg-green-500 text-white rounded-md">
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Task Details Modal */}
        <TaskDetailsModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          task={selectedTask}
          onDelete={handleDelete}
        />
      </div>
    </DragDropContext>
  );
}

export default TaskShow;
