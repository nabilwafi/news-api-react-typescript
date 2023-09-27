import { Col } from "antd";
import CardNews from "./CardNews";
import { INewsApiArticle } from "../../domain/entities/News";

type INewsArticleProps = {
  data: INewsApiArticle;
};

const ListNews = ({ data }: INewsArticleProps) => {
  return (
    <Col sm={24} md={12} lg={6}>
      <CardNews article={data} />
    </Col>
  );
};

export default ListNews;
