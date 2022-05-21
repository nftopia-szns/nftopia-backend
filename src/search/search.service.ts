import { Client } from '@elastic/elasticsearch';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SearchDto } from './dto';

@Injectable()
export class SearchService {
  private esClient: Client

  constructor(
    private configService: ConfigService
  ) {
    const cloudId = this.configService.get<string>("ES_CLOUD_ID")
    const apiKey = this.configService.get<string>("ES_API_KEY")

    this.esClient = new Client({
      cloud: { id: cloudId },
      auth: { apiKey: apiKey }
    })

    
  }

  async search(searchDto: SearchDto) {
    // this.esClient.search
    return this.esClient.indices.getMapping()
  }
}
