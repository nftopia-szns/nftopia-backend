import { Body, Controller, Post } from '@nestjs/common';
import { SearchDto } from './dto';
import SearchResultDto from './dto/search-result.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Post()
  async search(@Body() searchDto: SearchDto): Promise<SearchResultDto> {
    return await this.searchService.search(searchDto);
  }
}
