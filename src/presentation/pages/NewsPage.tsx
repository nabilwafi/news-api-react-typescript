import { useState } from "react";
import { NewsDataSourceImpl } from "../../data/datasources/News/NewsAPIDataSource";
import { NewsRepositoryImpl } from "../../data/repositories/NewsRepositoryImpl";
import { useFetchNews } from "../../domain/interactors/NewsUseCase";
import { Row, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import ListNews from "../components/ListNews";

const NewsPage = () => {
  const [query] = useState<string>("trump");
  const [pageSize] = useState<number>(10);

  const { news, isFetchingNewsLoading } = useFetchNews(
    new NewsRepositoryImpl(new NewsDataSourceImpl()),
    "news",
    {
      params: {
        q: query,
        pageSize: pageSize
      }
    }
  );

  return (
    <Content className="w-full max-w-[1280px] mx-auto px-3 py-10 min-h-screen">
      {isFetchingNewsLoading ? (
        <div className="text-center">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[8, 8]} justify="start">
          {news?.articles.map((article, key) => (
            <ListNews data={article} />
          ))}
        </Row>
      )}
    </Content>
  );
};

export default NewsPage;
