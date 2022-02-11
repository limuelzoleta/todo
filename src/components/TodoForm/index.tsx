import { useEffect } from "react";
import { TodoFormProps } from "../../interfaces";
import { TodoFormLogic } from "./TodoForm.logic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoForm = (props: TodoFormProps) => {
  const {
    taskName,
    priority,
    isEditing,
    handleChange,
    togglePriority,
    handleSubmit,
    setForEdit,
  } = TodoFormLogic();

  useEffect(() => {
    setForEdit(props.taskName, props.priority);
  }, [props.taskName, props.priority]);

  return (
    <div
      title='todoFormContainer'
      className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-72 '>
      <div className='container py-20 mx-auto flex items-center justify-center'>
        <form
          className='m-auto flex flex-wrap items-center mt-1'
          onSubmit={(e) => handleSubmit(e, props)}>
          <input
            className='w-full py-3 indent-5 text-xl grow-1 focus-visible:outline-none bg-cyan-50 focus:bg-white  rounded-md transition ease-in-out duration-300'
            placeholder='Things to do...'
            type='text'
            value={taskName}
            title='taskName'
            onChange={handleChange}
          />
          <div className='form-check align-self-center mt-3 flex items-center'>
            <button
              title='priority'
              type='button'
              className={`w-6 h-6 rounded flex items-center stroke-2 justify-center transition ease-in-out duration-300 ${
                priority ? "bg-rose-400" : "bg-white"
              }`}
              onClick={togglePriority}>
              {priority && (
                <FontAwesomeIcon
                  className='text-lg text-white'
                  icon={faCheck}
                />
              )}
            </button>
            <label
              className='font-medium text-white mx-1 '
              title='priorityLabel'>
              High Priority
            </label>
          </div>
          <button
            className='px-4 py-2 mt-3 grow-0 ml-auto bg-slate-700 hover:bg-slate-800 text-white rounded transition-all ease-in-out duration-300'
            type='submit'
            title='submitButton'>
            {isEditing ? "Save Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
