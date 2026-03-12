import { Injectable } from "@nestjs/common";

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

@Injectable()
export class TasksService {
    getTasks(): Task {
        return {
            id: 1,
            title: 'Task 1',
            description: 'This is the first task',
            completed: false
        };
    }

    createTask() {
        return 'Task created';
    }

    editTask() {
        return 'Task edited';
    }

    editTasks() {
        return 'Tasks edited';
    }

    deleteTask() {
        return 'Task deleted';
    }
}