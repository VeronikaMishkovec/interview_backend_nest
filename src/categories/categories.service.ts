import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Category, CategoryDocument} from "./category.schema";
import {Model} from "mongoose";
import {CreateCategoryDto} from "./dto/create-category.dto";

@Injectable()

export class CategoriesService {

  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

  async createNewCategory(dto: CreateCategoryDto): Promise<Category> {
    const newCategory = await this.categoryModel.create({...dto})
    return newCategory
  }
}
