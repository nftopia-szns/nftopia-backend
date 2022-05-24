import { Client } from '@elastic/elasticsearch';
import { SearchResponse } from '@elastic/elasticsearch/lib/api/types';
import { AggregationsAggregate } from '@elastic/elasticsearch/lib/api/typesWithBodyKey';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SearchDto } from './dto';

@Injectable()
export class ElasticsearchService {
    private client: Client

    constructor(
        private configService: ConfigService,
    ) {
        const cloudId = this.configService.get<string>("ES_CLOUD_ID")
        const apiKey = this.configService.get<string>("ES_API_KEY")

        this.client = new Client({
            cloud: { id: cloudId },
            auth: { apiKey: apiKey }
        })
    }

    async search(searchDto: SearchDto): Promise<SearchResponse<unknown, Record<string, AggregationsAggregate>>> {
        const resultsPerPage = searchDto.pageSize || 10
        const takeResultsFrom = searchDto.page ? ((searchDto.page - 1) * resultsPerPage) : 0;

        const searchResp = await this.client.search({
            from: takeResultsFrom,
            size: resultsPerPage,
            query: {
                multi_match: {
                    query: searchDto.query,
                    fields: [
                        "name",
                        "description",
                        "attributes.coordinate",
                    ]
                }
            }
        })

        console.log(searchResp);


        return searchResp
    }
}
