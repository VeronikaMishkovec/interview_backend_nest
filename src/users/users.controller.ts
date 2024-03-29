import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDto} from "../dto/create-user.dto";
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {
  }

  @Post('/create-new-user')
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto)
  }
}
