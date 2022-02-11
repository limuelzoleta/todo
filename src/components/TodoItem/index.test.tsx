import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from ".";
import { TodoTask } from "../../interfaces";

const renderTodo = (
  tasks: Array<TodoTask>,
  completeTask: any,
  editTask: any,
  removeTask: any,
  clearTasks: any
) =>
  render(
    <TodoItem
      tasks={tasks}
      completeTask={completeTask}
      removeTask={removeTask}
      editTask={editTask}
      clearTasks={clearTasks}
    />
  );

const fakeTasks = [
  { id: 1, taskName: "Test task 1", priority: true, isCompleted: false },
  { id: 2, taskName: "Test task 2", priority: true, isCompleted: true },
  { id: 3, taskName: "Test task 3", priority: false, isCompleted: false },
  { id: 4, taskName: "Test task 4", priority: false, isCompleted: true },
];

describe("TodoItem", () => {
  const completeTask = jest.fn();
  const editTask = jest.fn();
  const removeTask = jest.fn();
  const clearTasks = jest.fn();

  beforeEach(() => {
    completeTask.mockClear();
    editTask.mockClear();
    removeTask.mockClear();
    clearTasks.mockClear();
  });

  it("should render todo items", () => {
    renderTodo(fakeTasks, completeTask, editTask, removeTask, clearTasks);
    const taskItem = screen.getAllByTitle("taskItem");
    const taskName = screen.getAllByTitle("taskName");
    const editButton = screen.getAllByTitle("editTaskButton");
    const completeButton = screen.getAllByTitle("completeTaskButton");
    const removeButton = screen.getAllByTitle("removeTaskButton");
    expect(taskItem).toBeTruthy();
    expect(taskName).toBeTruthy();
    expect(editButton).toBeTruthy();
    expect(completeButton).toBeTruthy();
    expect(removeButton).toBeTruthy();
  });

  it("should show empty tasks string when no tasks added", () => {
    renderTodo([], completeTask, editTask, removeTask, clearTasks);

    const taskItem = screen.queryAllByTitle("taskItem");
    const emptyTasks = screen.getByTitle("noTasks");
    expect(taskItem).toEqual([]);
    expect(emptyTasks).toBeTruthy();
  });

  it("should not show edit and complete button when completed", () => {
    renderTodo([fakeTasks[1]], completeTask, editTask, removeTask, clearTasks);
    const taskItem = screen.getAllByTitle("taskItem");
    const taskName = screen.getByTitle("taskName");
    const editButton = screen.queryAllByTitle("editTaskButton");
    const completeButton = screen.queryAllByTitle("completeTaskButton");
    const removeButton = screen.getByTitle("removeTaskButton");

    expect(taskItem.length).toEqual(1);
    expect(taskName.innerHTML).toEqual("Test task 2");
    expect(editButton).toEqual([]);
    expect(completeButton).toEqual([]);
    expect(removeButton).toBeTruthy();
  });

  it("should set task for edit when edit button clicked", () => {
    renderTodo([fakeTasks[0]], completeTask, editTask, removeTask, clearTasks);
    const editButton = screen.getByTitle("editTaskButton");
    fireEvent.click(editButton);
    expect(editTask).toHaveBeenCalled();
    expect(editTask).toHaveBeenCalledTimes(1);
  });

  it("should complete task when complete button clicked", () => {
    renderTodo([fakeTasks[0]], completeTask, editTask, removeTask, clearTasks);
    const completeButton = screen.getByTitle("completeTaskButton");
    fireEvent.click(completeButton);
    expect(completeTask).toHaveBeenCalled();
    expect(completeTask).toHaveBeenCalledTimes(1);
  });

  it("should remove task when remove button clicked", () => {
    renderTodo([fakeTasks[0]], completeTask, editTask, removeTask, clearTasks);
    const removeButton = screen.getByTitle("removeTaskButton");
    fireEvent.click(removeButton);
    expect(removeTask).toHaveBeenCalled();
    expect(removeTask).toHaveBeenCalledTimes(1);
  });
});
