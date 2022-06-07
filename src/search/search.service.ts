import { SearchTotalHits } from '@elastic/elasticsearch/lib/api/types';
import { Injectable } from '@nestjs/common';
import { EnhancedSearchDto } from './dto';
import SearchResultDto from './dto/search-result.dto';
import { ElasticsearchService } from './elasticsearch.service';

@Injectable()
export class SearchService {

  constructor(private esService: ElasticsearchService) { }

  async enhancedSearch(searchDto: EnhancedSearchDto): Promise<SearchResultDto> {
    const searchResp = await this.esService.enhancedSearch(searchDto)

    const total = (typeof searchResp.hits.total === "number") ? searchResp.hits.total : (searchResp.hits.total as SearchTotalHits).value

    return {
      total: total,
      max_score: searchResp.hits.max_score,
      hits: searchResp.hits.hits,
    }
  }
}
