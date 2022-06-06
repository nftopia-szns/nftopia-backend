export interface GetAssetParamsBase {
    platform: MetaversePlatform;
}

export interface GetAssetParamsDecentraland extends GetAssetParamsBase {
    contractAddress: string,
    tokenId: string,
}

export enum AssetType {
    Parcel = 'parcel',
    Estate = 'estate'
}

export enum MetaversePlatform {
    Decentraland = 'decentraland'
}