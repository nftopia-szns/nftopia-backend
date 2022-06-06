import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AssetController } from './asset.controller';
import { AssetService } from './asset.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [
    AssetController
  ],
  providers: [
    AssetService,
  ]
})
export class AssetModule { }
