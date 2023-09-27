import { HTTPRequestConfig } from "../../services/Http";
import { INewsApiResponse } from "../entities/news-response";

export interface NewsRepository {
  getNews(config: HTTPRequestConfig): Promise<INewsApiResponse>;
  getNew(id: number, config: HTTPRequestConfig): Promise<INewsApiResponse>;
}
