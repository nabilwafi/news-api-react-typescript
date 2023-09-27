export interface INewsApiArticle {
  source: INewsApiSource;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface INewsApiSource {
  id: string | null;
  name: string;
}
