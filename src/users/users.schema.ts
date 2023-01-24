import {HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  username: string;

  @Prop()
  first_name: string;

  @Prop()
  second_name: string;

  @Prop()
  specialisation: string;

  @Prop()
  degree: string;

  @Prop()
  technologies: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
