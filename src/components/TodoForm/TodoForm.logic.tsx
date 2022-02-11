import { useState, ChangeEvent, SyntheticEvent } from "react";
import { TodoFormProps } from "../../interfaces";
import { getCurrentTimestamp } from "../../utils";

const TodoFormLogic = () => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const togglePriority = (e: ChangeEvent<HTMLInputElement>) => {
    setPriority(!priority);
  };

  const handleSubmit = (e: SyntheticEvent, props: TodoFormProps) => {
    e.preventDefault();
    const task = {
      id: getCurrentTimestamp(),
      taskName,
      priority,
    };
    props.onSubmit(task);
    setTaskName("");
    setPriority(false);
  };

  return { taskName, priority, handleChange, togglePriority, handleSubmit };
};

export { TodoFormLogic };
