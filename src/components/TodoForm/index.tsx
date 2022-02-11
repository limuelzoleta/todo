import React from "react";
import { TodoFormProps } from "../../interfaces";
import { TodoFormLogic } from "./TodoForm.logic";

const TodoForm = (props: TodoFormProps) => {
  const { taskName, priority, handleChange, togglePriority, handleSubmit } =
    TodoFormLogic();

  return (
    <div className='bg-sky-500 h-72 '>
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
            <input
              className='w-4 h-4 bg-gray-50 rounded border-cyan-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
              type='checkbox'
              title='priority'
              name='priority'
              value='priority'
              onChange={togglePriority}
              checked={priority}
            />
            <label
              className='font-medium text-white mx-1 '
              title='priorityLabel'>
              High Priority
            </label>
          </div>
          <button
            className='px-4 py-2 mt-3 grow-0 ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition ease-in-out duration-300'
            type='submit'
            title='submitButton'>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
