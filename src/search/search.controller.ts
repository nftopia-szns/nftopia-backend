import { Body, Controller, Post } from '@nestjs/common';
import { SearchDto } from './dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Post()
  async search(@Body() searchDto: SearchDto): Promise<object> {
    const mapping = await this.searchService.search(searchDto);
    return { result: mapping}
  }
}
