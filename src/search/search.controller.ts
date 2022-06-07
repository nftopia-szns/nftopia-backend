import { Body, Controller, HttpCode, Post, Query } from '@nestjs/common';
import { EnhancedSearchDto } from './dto';
import SearchResultDto from './dto/search-result.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) { }
  @Post()
  @HttpCode(200)
  async enhancedSearch(@Body() searchDto: EnhancedSearchDto): Promise<SearchResultDto> {
    return await this.searchService.enhancedSearch(searchDto)
  }
}
