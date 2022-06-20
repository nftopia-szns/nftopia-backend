import { QueryDslQueryContainer } from "@elastic/elasticsearch/lib/api/types";

export interface EnhancedSearchDto {
  indices: string[]
  query: QueryDslQueryContainer;
  sort: string  | string[];
  page?: number;
  pageSize?: number;
}

export enum PropertyType {
  PARCEL = 'parcel',
  ESTATE = 'estate'
}