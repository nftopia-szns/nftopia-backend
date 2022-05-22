import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { ElasticsearchService } from './elasticsearch.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [
    SearchController,
  ],
  providers: [
    SearchService,
    ElasticsearchService
  ],
})
export class SearchModule { }
