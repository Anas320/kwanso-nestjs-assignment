import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb+srv://usman:41526374aa@cluster0.ekyop.mongodb.net/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    UserModule,
    AuthModule,
    TaskModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
