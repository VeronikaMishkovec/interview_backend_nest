import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {CategoriesModule} from "./categories/categories.module";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CategoriesModule,
    MongooseModule.forRoot('mongodb+srv://ADMIN:EHhiHeadSM6taShi@cluster0.ab4ywu3.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    AuthModule,
  ],
})

export class AppModule {

}
