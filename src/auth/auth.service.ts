import { Injectable } from '@nestjs/common';
import { Payload } from 'src/types/payload';
import { sign, verify } from 'jsonwebtoken';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) {}
  
  async signPayload(payload: Payload) {
    return sign(payload, process.env.SECRET_KEY , { expiresIn: '7d' });
  }
  async validateUser(payload: Payload) {
    return await this.userService.findByPayload(payload);
  }
  async getUserData ( jwt : any ) {
    const decoded = verify(jwt, process.env.SECRET_KEY )
    const user = await this.userService.findByEmail(decoded['email']);
    return user
  }
}
