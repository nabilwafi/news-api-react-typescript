import { INewsApiArticle } from "./News";

export type ApiNewsResponseStatus = "ok" | "error";

export interface INewsApiResponse {
  status: ApiNewsResponseStatus;
  code?: string;
  error?: string;
  totalResults: number;
  articles: Array<INewsApiArticle>;
}
