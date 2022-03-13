import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/types/task';

@Injectable()
export class TaskService {

    constructor(
        @InjectModel('Task') private taskModel: Model<Task>,
      ) {}

      async getAllTasks(){
        const tasks = await this.taskModel.find({})
        return {tasks}
      }
      async createTask(body){
        const task =  await this.taskModel.create(body)
        return {task}
    }
    
}
