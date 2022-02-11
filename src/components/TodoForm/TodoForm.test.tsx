import { render, fireEvent, screen } from "@testing-library/react";
import TodoForm from ".";

const renderForm = (onSubmit: any) => render(<TodoForm onSubmit={onSubmit} />);

describe("TodoForm", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
  });
  it("should render form", () => {
    renderForm(onSubmit);
    const taskField = screen.getByTitle("taskName");
    const priorityToggle = screen.getByTitle("priority");
    const label = screen.getByTitle("priorityLabel");
    const submitButton = screen.getByTitle("submitButton");
    expect(taskField).toBeTruthy();
    expect(priorityToggle).toBeTruthy();
    expect(label).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  it("should change taskName value when onChange", () => {
    renderForm(onSubmit);
    const taskField: HTMLInputElement = screen.getByTitle("taskName");
    fireEvent.change(taskField, { target: { value: "test value" } });
    expect(taskField.value).toBe("test value");
  });

  it("should toggle priority", () => {
    renderForm(onSubmit);
    const priorityToggle: HTMLInputElement = screen.getByTitle("priority");
    fireEvent.change(priorityToggle, { target: { checked: true } });
    expect(priorityToggle.checked).toBe(true);
  });

  it("should not submit form on click when input is empty", () => {
    renderForm(onSubmit);
    const submitButton: HTMLButtonElement = screen.getByTitle("submitButton");
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it("should submit form on clich when input has value", () => {
    renderForm(onSubmit);
    const submitButton: HTMLButtonElement = screen.getByTitle("submitButton");
    const taskField = screen.getByTitle("taskName");
    fireEvent.change(taskField, { target: { value: "test value" } });
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
