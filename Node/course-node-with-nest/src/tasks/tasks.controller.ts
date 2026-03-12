import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({})
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get('/tasks')
    getAllTasks() {
        return this.tasksService.getTasks();
    }

    @Post('/tasks')
    createTask() {
        return this.tasksService.createTask();
    }

    @Put('/tasks')
    editTasks() {
        return this.tasksService.editTasks();
    }

    @Patch('/tasks')
    editTask() {
        return this.tasksService.editTask();
    }

    @Delete('/tasks')
    deleteTask() {
        return this.tasksService.deleteTask();
    }
}