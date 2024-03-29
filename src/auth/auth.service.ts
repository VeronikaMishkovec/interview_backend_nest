import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateUserDto} from "../dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import {User} from "../users/users.schema";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService,
              private jwtService: JwtService) {
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email)
    const candidate_by_username = await this.userService.getUserByUsername(userDto.username)

    if(candidate || candidate_by_username) {
      if (candidate) {
        throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
      }

      if (candidate_by_username) {
        throw new HttpException('Пользователь с таким username уже существует', HttpStatus.BAD_REQUEST)
      }
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5)

    const user = await this.userService.createUser({...userDto, password: hashPassword })

    return this.generateToken(user)
  }

  async generateToken(user: User) {
    const payload = {email: user.email}

    return {
      token: this.jwtService.sign(payload)
    }
  }
}
