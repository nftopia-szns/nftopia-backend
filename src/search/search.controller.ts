import { Body, Controller, Post, Query } from '@nestjs/common';
import { SearchDto } from './dto';
import SearchResultDto from './dto/search-result.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) { }

  @Post()
  async search(@Body() searchDto: SearchDto): Promise<SearchResultDto> {
    return await this.searchService.search(searchDto);
  }

  @Post('/byId')
  async searchById(@Query('id') id: string): Promise<SearchResultDto> {
    return await this.searchService.searchById(id)
  }
}
