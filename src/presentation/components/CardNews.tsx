import { Card } from "antd";
import { INewsApiArticle } from "../../domain/entities/News";
import { limit } from "../../helpers/limit_text";
import Meta from "antd/es/card/Meta";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { text_to_url } from "../../helpers/text_to_url";

type INewsArticleProps = {
  article: INewsApiArticle;
};

const CardNews = ({ article }: INewsArticleProps) => {
  return (
    <NavLink to={"/article/" + text_to_url(article.title)}>
      <Card
        hoverable
        cover={
          <img
            alt={article.title}
            src={article.urlToImage!}
            className="object-cover w-[400px] h-[200px]"
          />
        }
      >
        <Meta title={article.title} description={limit(article.description!)} />
        <div className="flex justify-between mt-5 text-xs text-gray-500">
          <p>{article.author}</p>

          <p>{moment(article.publishedAt).fromNow()}</p>
        </div>
      </Card>
    </NavLink>
  );
};

export default CardNews;
