import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetAssetParamsBase, GetAssetParamsDecentraland, MetaversePlatform } from './dto';
import { map, Observable } from 'rxjs'

@Injectable()
export class AssetService {

    constructor(
        private configService: ConfigService,
        private httpService: HttpService) {}

    getAsset(params: GetAssetParamsBase): Observable<AxiosResponse<any>> {
        switch (params.platform) {
            case MetaversePlatform.Decentraland:
                const reqParams = params as GetAssetParamsDecentraland
                const dclNFTApiUrl = this.configService.get<string>('DCL_NFT_API');
                const nftQueryParams = `?contractAddress=${reqParams.contractAddress}&tokenId=${reqParams.tokenId}`
                
                return this.httpService.get(`${dclNFTApiUrl}${nftQueryParams}`).pipe(map(r => r.data.data[0].nft))
            default:
                throw new Error(`${params.platform} is not supported`)
        }
    }

}
