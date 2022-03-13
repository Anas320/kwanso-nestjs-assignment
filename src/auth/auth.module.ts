import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { TaskService } from 'src/task/task.service';
import { UserModule } from 'src/user/user.module';
import { TaskModule } from 'src/task/task.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UserModule, TaskModule ],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
