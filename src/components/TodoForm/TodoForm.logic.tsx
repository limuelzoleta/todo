import { useState, ChangeEvent, SyntheticEvent } from "react";
import { TodoFormProps } from "../../interfaces";
import { getCurrentTimestamp } from "../../utils";

const TodoFormLogic = () => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Sets the states with the values from the task object to be edited
   * @param taskName name of the task to be edited
   * @param priority priority of the task to be edited
   */
  const setForEdit = (taskName: string = "", priority: boolean = false) => {
    setTaskName(taskName);
    setPriority(priority);
    setIsEditing(taskName !== "" ? true : false);
  };

  /**
   * Sets the taskName state to input field value
   * @param e change event
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  /**
   * Sets the priority of the task
   */
  const togglePriority = () => {
    setPriority(!priority);
  };

  /**
   * Creates task id using current time sets the default for isCompleted
   * and add the task to the list
   * @param e form event
   * @param props TodoFormProps to handle the submit
   */
  const handleSubmit = (e: SyntheticEvent, props: TodoFormProps) => {
    e.preventDefault();
    if (taskName.trim().length === 0) {
      return;
    }
    const task = {
      id: getCurrentTimestamp(),
      taskName,
      priority,
      isCompleted: false,
    };
    props.onSubmit(task);
    setTaskName("");
    setPriority(false);
  };

  return {
    taskName,
    priority,
    isEditing,
    handleChange,
    togglePriority,
    handleSubmit,
    setForEdit,
  };
};

export { TodoFormLogic };
