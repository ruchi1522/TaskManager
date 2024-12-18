export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  is_completed: boolean;
}

export interface TaskCreate {
  title: string;
  description: string;
  deadline: string;
  is_completed: boolean;
}
