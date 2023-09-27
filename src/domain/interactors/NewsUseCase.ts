import { NewsRepositoryImpl } from "../../data/repositories/NewsRepositoryImpl";
import { HTTPRequestConfig } from "../../services/Http";
import { useQuery } from "@tanstack/react-query";
import { INewsApiResponse } from "../entities/news-response";

export const useFetchNews = (
  repository: NewsRepositoryImpl,
  queryKey: string,
  config: HTTPRequestConfig = {}
) => {
  const { data, isLoading } = useQuery<INewsApiResponse>({
    queryKey: [queryKey],
    queryFn: () => repository.getNews(config)
  });

  return {
    news: data,
    isFetchingNewsLoading: isLoading
  };
};
