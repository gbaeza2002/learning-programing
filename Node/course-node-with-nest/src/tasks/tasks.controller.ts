import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getTasks();
    }

    @Post()
    createTask() {
        return this.tasksService.createTask();
    }

    @Put()
    editTasks() {
        return this.tasksService.editTasks();
    }

    @Patch()
    editTask() {
        return this.tasksService.editTask();
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }
}