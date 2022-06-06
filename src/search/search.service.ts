import { SearchTotalHits } from '@elastic/elasticsearch/lib/api/types';
import { Injectable } from '@nestjs/common';
import { SearchDto } from './dto';
import SearchResultDto from './dto/search-result.dto';
import { ElasticsearchService } from './elasticsearch.service';

@Injectable()
export class SearchService {

  constructor(private esService: ElasticsearchService) { }

  async search(searchDto: SearchDto): Promise<SearchResultDto> {
    const searchResp = await this.esService.search(searchDto)

    const total = (typeof searchResp.hits.total === "number") ? searchResp.hits.total : (searchResp.hits.total as SearchTotalHits).value

    return {
      total: total,
      max_score: searchResp.hits.max_score,
      hits: searchResp.hits.hits,
    }
  }

  async searchById(id: string): Promise<SearchResultDto> {
    const searchResp = await this.esService.searchById(id)

    return {
      total: 1,
      max_score: searchResp.hits.max_score,
      hits: searchResp.hits.hits,
    }
  }
}
