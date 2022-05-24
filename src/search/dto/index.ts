export interface SearchDto {
  query: string;
  page?: number;
  pageSize?: number;
}

export enum PropertyType {
  PARCEL = 'parcel',
  ESTATE = 'estate'
}