import {Body, Controller, Post} from "@nestjs/common";
import {CategoriesService} from "./categories.service";
import {CreateCategoryDto} from "./dto/create-category.dto";

@Controller('/categories/create-new')

export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  createNewCategory(@Body() dto: CreateCategoryDto){
    return this.categoriesService.createNewCategory(dto)
  }
}
