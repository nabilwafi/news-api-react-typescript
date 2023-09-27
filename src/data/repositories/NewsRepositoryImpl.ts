import { NewsDataSource } from "../datasources/News/NewsDataSource";
import { NewsRepository } from "../../domain/repositories/NewsRepository";
import { HTTPRequestConfig } from "../../services/Http";
import { INewsApiResponse } from "../../domain/entities/news-response";

export class NewsRepositoryImpl implements NewsRepository {
  datasource: NewsDataSource;

  constructor(datasource: NewsDataSource) {
    this.datasource = datasource;
  }

  async getNews(config: HTTPRequestConfig = {}): Promise<INewsApiResponse> {
    return await this.datasource.getNews(config);
  }

  async getNew(
    id: number,
    config: HTTPRequestConfig = {}
  ): Promise<INewsApiResponse> {
    return await this.datasource.getNew(id, config);
  }
}
