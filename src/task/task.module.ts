import { Module, forwardRef } from '@nestjs/common';
import { TaskService } from './task.service';
import {TaskController} from './task.controller'
// import {TaskController} from './task.controller'
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from '../models/user.schema';

@Module({
    // imports: [
    //     forwardRef(() => AuthModule),
    // ],
    imports: [
        MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
      ],
  providers: [TaskService],
  controllers: [TaskController],
  exports: [TaskService],
})
export class TaskModule {}
