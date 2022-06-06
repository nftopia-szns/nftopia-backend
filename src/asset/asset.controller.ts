import { Controller, Get, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AssetService } from './asset.service';
import { GetAssetParamsBase } from './dto';

@Controller('asset')
export class AssetController {

    constructor(private assetService: AssetService) {
    }
    
    @Get(':platform/:contractAddress/:tokenId')
    getAsset(@Param() params: GetAssetParamsBase): Observable<AxiosResponse<any>> {
        return this.assetService.getAsset(params)
    }
}
