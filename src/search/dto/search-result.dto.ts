import { SearchHit } from "@elastic/elasticsearch/lib/api/types";

export default interface SearchResultDto {
  total: number;
  max_score: number;
  hits: SearchHit[]
}