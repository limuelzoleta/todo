// import { FunctionWithoutArgs } from "../types";

export interface TodoTask {
  id: number;
  taskName: string;
  priority: boolean;
}

export interface TodoFormProps {
  onSubmit(task: TodoTask): any;
}
