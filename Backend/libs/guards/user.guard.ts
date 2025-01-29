import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  
  @Injectable()
  export class UserGuard implements CanActivate {
    constructor(
      private readonly jwtService: JwtService,
    ) {}
    async canActivate(ctx: ExecutionContext) {
      try {
        const request = ctx.switchToHttp().getRequest();
  
        let token = request.headers.authorization;
  
        if (!token) {
          throw new UnauthorizedException('token not found');
        }
  
        token = token.split(' ')[1];
  
        const tokenData = this.jwtService.verify(token, { secret: 'myn-secret' });
        console.log(tokenData);
        // const userData = await ===> fetch user data
  
        // if (!userData) {
        //   throw new UnauthorizedException('Invalid token');
        // }
  
        // request['user'] = userData;
  
        return true;
      } catch (e) {
        throw e;
      }
    }
  }