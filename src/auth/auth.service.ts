import { Injectable } from '@nestjs/common';
import { Payload } from 'src/types/payload';
import { sign, verify } from 'jsonwebtoken';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) {}
  
  async signPayload(payload: Payload) {
    // return sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' });
    return sign(payload, 'dx3929070wa23_234790asdasdAsASDFASD', { expiresIn: '7d' });
  }
  async validateUser(payload: Payload) {
    return await this.userService.findByPayload(payload);
  }
  async getUserData ( jwt : any ) {
    const decoded = verify(jwt,'dx3929070wa23_234790asdasdAsASDFASD')
    const user = await this.userService.findByEmail(decoded['email']);
    return user
  }
}
