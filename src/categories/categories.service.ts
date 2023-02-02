import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Category, CategoryDocument} from "./category.schema";
import {Model} from "mongoose";
import {CreateCategoryDto} from "../dto/create-category.dto";
import {FilesService} from "../files/files.service";

@Injectable()

export class CategoriesService {

  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
              private fileService: FilesService) {}

  async createNewCategory(dto: CreateCategoryDto, image: any): Promise<Category> {
    const fileName = await this.fileService.createFile(image)
    const newCategory = await this.categoryModel.create({...dto, image: fileName})
    return newCategory
  }
}
