import React from "react";
import { TodoTasks } from "../../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({
  tasks,
  completeTask,
  editTask,
  removeTask,
  clearTasks,
}: TodoTasks) => {
  return (
    <div title='todoItemContainer' className='w-1/2 container py-5 mx-auto'>
      <h1 className='text-2xl pb-3 font-bold flex items-center'>
        Tasks
        <div className='ml-auto text-sm font-normal text-right'>
          Total Tasks: {tasks.length} | Total Completed :{" "}
          {tasks.filter((task) => task.isCompleted).length}
          <button
            title='clearTasks'
            className='mx-3 px-2 py-1 bg-neutral-700 hover:bg-neutral-900 text-white rounded transition-all ease-in-out duration-300'
            onClick={clearTasks}>
            Clear
          </button>
        </div>
      </h1>
      <div className='px-3 py-5 border-2 rounded-xl h-[50vh] overflow-y-auto border-cyan-300 w-100'>
        {tasks.length > 0 ? (
          tasks.map(({ id, taskName, priority, isCompleted }) => (
            <div
              title='taskItem'
              className={`mb-3 p-3 border-1 rounded text-white transition-all ease-in-out duration-300 ${
                priority
                  ? "bg-gradient-to-r from-pink-500 to-rose-300"
                  : "bg-gradient-to-r from-cyan-500 to-indigo-300"
              }`}
              key={id}>
              <div className='flex items-center mt-1'>
                {!isCompleted && (
                  <button
                    title='completeTaskButton'
                    className='mr-2 group hover:bg-neutral-800 border-2 rounded border-white transition-all ease-in-out duration-300'
                    onClick={() => completeTask(id)}>
                    <div className='flex items-center justify-center md:w-8 md:h-8 sm:h-5 sm:w-5'>
                      <FontAwesomeIcon
                        className='text-white text-lg invisible group-hover:visible transition-all ease-in-out duration-300'
                        icon={faCheck}
                      />
                    </div>
                  </button>
                )}
                <div
                  title='taskName'
                  className={`md:text-xl sm:text-lg ${
                    isCompleted ? "line-through" : ""
                  }`}>
                  {taskName}
                </div>
                <div className='buttons ml-auto w-[15%] flex justify-end justify-self-end '>
                  {!isCompleted && (
                    <>
                      <button
                        className='mx-2'
                        onClick={() => editTask(id)}
                        title='editTaskButton'>
                        <FontAwesomeIcon
                          className='text-lg text-cyan-700 hover:text-cyan-800'
                          icon={faPencil}
                        />
                      </button>
                    </>
                  )}

                  <button
                    title='removeTaskButton'
                    className='mx-2'
                    onClick={() => removeTask(id)}>
                    <FontAwesomeIcon
                      className='text-lg text-cyan-700 hover:text-cyan-800 transition-all ease-in-out duration-300'
                      icon={faTrash}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div title='noTasks' className='text-4xl'>
            Start adding tasks and let's get workin'
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
