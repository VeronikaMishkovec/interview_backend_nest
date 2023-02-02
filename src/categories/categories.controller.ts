import {Body, Controller, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {CategoriesService} from "./categories.service";
import {CreateCategoryDto} from "../dto/create-category.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('/categories/create-new')

export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createNewCategory(@Body() dto: CreateCategoryDto,
                    @UploadedFile() image){
    return this.categoriesService.createNewCategory(dto, image)
  }
}
