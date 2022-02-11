import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";
import { TodoListLogic } from "./TodoList.logic";

const TodoList = () => {
  const {
    tasks,
    taskForEdit,
    addTask,
    completeTask,
    updateTask,
    removeTask,
    setForEdit,
    clearStorage,
  } = TodoListLogic();

  return (
    <div>
      <TodoForm
        taskName={taskForEdit.taskName}
        priority={taskForEdit.priority}
        onSubmit={taskForEdit.id === 0 ? addTask : updateTask}
      />
      <TodoItem
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        editTask={setForEdit}
        clearTasks={clearStorage}
      />
    </div>
  );
};

export default TodoList;
