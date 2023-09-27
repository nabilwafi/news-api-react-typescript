import { Content } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import { LeftOutlined, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Skeleton } from "antd";
import { useParams } from "react-router-dom";
import { url_to_text } from "../../helpers/url_to_text";
import { useFetchNews } from "../../domain/interactors/NewsUseCase";
import { NewsRepositoryImpl } from "../../data/repositories/NewsRepositoryImpl";
import { NewsDataSourceImpl } from "../../data/datasources/News/NewsAPIDataSource";
import moment from "moment";

const NewsDetailPage = () => {
  const params = useParams();
  const title = url_to_text(params.title!);

  const { news, isFetchingNewsLoading } = useFetchNews(
    new NewsRepositoryImpl(new NewsDataSourceImpl()),
    title,
    {
      params: {
        q: title,
        pageSize: 1
      }
    }
  );

  return (
    <Content className="w-full max-w-[1280px] mx-auto px-3 py-10 min-h-screen">
      <div className="bg-white p-5 rounded-lg">
        <div className="flex justify-between">
          <NavLink to="/">
            <LeftOutlined />
            Back
          </NavLink>

          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">
                <HomeOutlined />
              </NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="mt-5">
          <Skeleton loading={isFetchingNewsLoading} active>
            <img
              className="mb-3 w-full"
              src={news?.articles[0].urlToImage!}
              alt={news?.articles[0].title}
            />
          </Skeleton>

          <div className="flex justify-between items-center">
            <Skeleton loading={isFetchingNewsLoading}>
              <h1 className="text-sm lg:text-lg font-bold">
                {news?.articles[0].title}
              </h1>
            </Skeleton>

            <Skeleton loading={isFetchingNewsLoading}>
              <p>{moment(news?.articles[0].publishedAt).fromNow()}</p>
            </Skeleton>
          </div>

          <Skeleton loading={isFetchingNewsLoading}>
            <p>{news?.articles[0].content}</p>
          </Skeleton>
        </div>
      </div>
    </Content>
  );
};

export default NewsDetailPage;
