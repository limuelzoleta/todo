import { useState, useEffect } from "react";
import { TodoTask } from "../../interfaces";
import { sortByPriorityName } from "../../utils";

export const TodoListLogic = () => {
  const [tasks, setTasks] = useState<TodoTask[]>([]);
  const [taskForEdit, setTaskForEdit] = useState<TodoTask>({
    id: 0,
    taskName: "",
    priority: false,
    isCompleted: false,
  });

  useEffect(() => {
    getFromStorage();
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      saveToStorage();
    }
  }, [tasks]);

  /**
   * Add the task to the list
   * @param task Task item
   */
  const addTask = (task: TodoTask) => {
    saveTask([task, ...tasks]);
  };

  /**
   * Changes the tasks state to completed
   * @param id task id
   */
  const completeTask = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = true;
      }
      return task;
    });

    saveTask(updatedTasks);
  };

  /**
   * Updates the task and clear the form
   * @param newValue new task data
   */

  const updateTask = (newValue: TodoTask) => {
    if (!newValue.taskName || /^\s*$/.test(newValue.taskName)) {
      return;
    }
    const updatedTasks = tasks.map((item) =>
      item.id === taskForEdit.id ? newValue : item
    );
    saveTask(updatedTasks);

    setTaskForEdit({
      id: 0,
      taskName: "",
      priority: false,
      isCompleted: false,
    });
  };

  /**
   * Sorts the tasks before saving
   * @param taskToBeSaved Tasks list
   */
  const saveTask = (taskToBeSaved: Array<TodoTask>) => {
    setTasks(sortByPriorityName(taskToBeSaved));
  };

  /**
   * Removes task from the list
   * @param id taskId
   */
  const removeTask = (id: number) => {
    const removedTask = [...tasks].filter((task) => task.id !== id);
    if (removedTask.length === 0) {
      clearStorage();
    }
    saveTask(removedTask);
  };

  /**
   * Sets the task for edit to pre-fill the form
   * @param id taskId
   */
  const setForEdit = (id: number) => {
    setTaskForEdit(tasks.filter((task) => task.id === id)[0]);
  };

  /**
   * Gets the items from localStorage on first load
   */
  const getFromStorage = () => {
    const tasksFromStorage = localStorage.getItem("tasks");
    if (tasksFromStorage && tasksFromStorage.length > 0) {
      const tasksArr = JSON.parse(tasksFromStorage);
      saveTask(tasksArr);
    }
  };

  /**
   * Saves the items to localStorage on first load
   */
  const saveToStorage = () => {
    const sorted = sortByPriorityName(tasks);
    localStorage.setItem("tasks", JSON.stringify(sorted));
  };

  const clearStorage = () => {
    setTasks([]);
    localStorage.setItem("tasks", "[]");
  };

  return {
    tasks,
    taskForEdit,
    setForEdit,
    addTask,
    completeTask,
    updateTask,
    clearStorage,
    removeTask,
  };
};
