import { Body, Controller, Get, Post, UseGuards, Headers } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { RegisterDTO } from 'src/user/register.dto';
import { UserService } from 'src/user/user.service';
import { TaskService } from 'src/task/task.service';
import { AuthService } from './auth.service';
import { LoginDTO } from './login.dto';
import {TaskDTO} from 'src/task/task.dto'

@Controller('')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private taskService: TaskService
  ) { }

  @Post('register')
  async register(@Body() registerDTO: RegisterDTO) {
    const user = await this.userService.create(registerDTO);
    const payload = {

      email: user.email,
    };

    const token = await this.authService.signPayload(payload);
    return { user };
  }
  @Post('login')
  async login(@Body() loginDTO: LoginDTO) {
    const user = await this.userService.findByLogin(loginDTO);
    const payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { "jwt" : token };
  }


  @Get("/list-tasks")
  @UseGuards(AuthGuard("jwt"))
  async getTask() {
    // return "hidden information";
    return this.taskService.getAllTasks();
  }

  @Get("/user")
  @UseGuards(AuthGuard("jwt"))
  async getUserBack(@Headers() headers) {
    const token = headers['authorization'].split(" ")[1];
    const user  =  this.authService.getUserData(token);
    return  user 
  }
}
