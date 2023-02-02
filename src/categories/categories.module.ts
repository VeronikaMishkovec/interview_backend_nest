import {Module} from "@nestjs/common";
import {CategoriesController} from "./categories.controller";
import {CategoriesService} from "./categories.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Category, CategorySchema} from "./category.schema";
import {FilesModule} from "../files/files.module";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}]),
    FilesModule
  ],
  controllers: [
    CategoriesController
  ],

  providers: [
    CategoriesService
  ]
})

export class CategoriesModule {}
