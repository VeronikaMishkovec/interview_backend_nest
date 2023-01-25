import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User, UserDocument} from "./users.schema";
import {CreateUserDto} from "../dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }
  async createUser(dto: CreateUserDto) {
    const user = await this.userModel.create({...dto})
    return user
  }

  async getUserByEmail(email: string) {
    const user = await this.userModel.findOne({ email })
    return user
  }

  async getUserByUsername(username: string) {
    const user = await this.userModel.findOne({ username })
    return user
  }
}
