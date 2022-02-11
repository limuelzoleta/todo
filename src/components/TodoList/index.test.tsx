import { render, screen } from "@testing-library/react";
import TodoList from ".";

const renderTodoList = () => render(<TodoList />);

describe("TodoList", () => {
  it("should render todo form and list", () => {
    renderTodoList();
    const todoFormContainer = screen.getByTitle("todoFormContainer");
    const todoItemContainer = screen.getByTitle("todoItemContainer");

    expect(todoFormContainer).toBeTruthy();
    expect(todoItemContainer).toBeTruthy();
  });
});
