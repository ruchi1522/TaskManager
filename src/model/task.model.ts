export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  isCompleted: boolean;
}

export interface TaskCreate {
  title: string;
  description: string;
  deadline: string;
  isCompleted: boolean;
}
