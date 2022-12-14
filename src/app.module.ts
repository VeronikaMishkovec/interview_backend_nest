import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  controllers: [
    AppController
  ],
  providers: [AppService],
  imports: [MongooseModule.forRoot('mongodb+srv://ADMIN:EHhiHeadSM6taShi@cluster0.ab4ywu3.mongodb.net/?retryWrites=true&w=majority')],
})

export class AppModule {

}
