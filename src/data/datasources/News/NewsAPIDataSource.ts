import { NewsDataSource } from "./NewsDataSource";
import { HTTPRequestConfig, Http } from "../../../services/Http";
import { INewsApiResponse } from "../../../domain/entities/news-response";

export class NewsDataSourceImpl implements NewsDataSource {
  async getNews(config: HTTPRequestConfig = {}): Promise<INewsApiResponse> {
    const res = await Http.get<INewsApiResponse>("/top-headlines", config);
    return res.data;
  }

  async getNew(
    id: number,
    config: HTTPRequestConfig = {}
  ): Promise<INewsApiResponse> {
    const res = await Http.get<INewsApiResponse>("/everything/" + id, config);
    return res.data;
  }
}
