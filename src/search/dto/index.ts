export interface SearchDto {
  query: string;
  page?: number;
}

export enum PropertyType {
  PARCEL = 'parcel',
  ESTATE = 'estate'
}