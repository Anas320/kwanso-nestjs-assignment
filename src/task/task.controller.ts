import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { RegisterDTO } from 'src/user/register.dto';
import { UserService } from 'src/user/user.service';
import { TaskService } from './task.service';
import {TaskDTO} from './task.dto'

@Controller('')
export class TaskController {
  constructor(
      private taskService: TaskService
  ) { }

  @Get("/list-tasks")
  @UseGuards(AuthGuard("jwt"))
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post("/create-task")
  @UseGuards(AuthGuard("jwt"))
  async createTask(@Body() task: TaskDTO) {
    // return "hidden information";
    return this.taskService.createTask(task);
  }

}
