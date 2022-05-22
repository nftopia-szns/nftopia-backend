import { Client } from '@elastic/elasticsearch';
import { SearchTotalHits } from '@elastic/elasticsearch/lib/api/types';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SearchDto } from './dto';
import SearchResultDto from './dto/search-result.dto';
import { ElasticsearchService } from './elasticsearch.service';

@Injectable()
export class SearchService {
  private esClient: Client

  constructor(
    private configService: ConfigService,
    private esService: ElasticsearchService
  ) {
    const cloudId = this.configService.get<string>("ES_CLOUD_ID")
    const apiKey = this.configService.get<string>("ES_API_KEY")

    this.esClient = new Client({
      cloud: { id: cloudId },
      auth: { apiKey: apiKey }
    })


  }

  async search(searchDto: SearchDto): Promise<SearchResultDto>  {
    // this.esClient.search
    const searchResp = await this.esService.search(searchDto)

    const total = (typeof searchResp.hits.total === "number") ? searchResp.hits.total : (searchResp.hits.total as SearchTotalHits).value

    return {
      total: total,
      max_score: searchResp.hits.max_score,
      hits: searchResp.hits.hits,
    }
  }
}
