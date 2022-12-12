import {Injectable} from "@nestjs/common";

@Injectable()

export class AppService {
  getCategories(): string{
    return 'GET aLL CAT'
  }
}
