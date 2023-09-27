import { INewsApiResponse } from "../../../domain/entities/news-response";
import { HTTPRequestConfig } from "../../../services/Http";

export interface NewsDataSource {
  getNews(config: HTTPRequestConfig): Promise<INewsApiResponse>;
  getNew(id: number, config: HTTPRequestConfig): Promise<INewsApiResponse>;
}
