export interface TodoTask {
  id: number;
  taskName: string;
  priority: boolean;
  isCompleted: boolean;
}

export interface TodoTasks {
  tasks: Array<TodoTask>;
  completeTask: any;
  removeTask: any;
  editTask: any;
  clearTasks: any;
}

export interface TodoFormProps {
  onSubmit(task: TodoTask): any;
  taskName?: string;
  priority?: boolean;
}

export interface TodoListInterface {
  activeTasks: Array<TodoTask>;
  completedTasks: Array<TodoTask>;
}
