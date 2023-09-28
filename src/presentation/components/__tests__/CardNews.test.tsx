import { render, screen } from "@testing-library/react";
import CardNews from "../CardNews";

const mockArticle = {
  title: "Sample Article",
  source: {
    id: "123",
    name: "Jhon"
  },
  url: "sample-url.com",
  content: "This is content of the sample article",
  description: "This is a sample article description.",
  urlToImage: "sample-image.jpg",
  author: "John Doe",
  publishedAt: "2023-09-27T12:00:00Z"
};

it("renders article title", () => {
  render(<CardNews article={mockArticle} />);
  const titleElement = screen.getByText(mockArticle.title);
  expect(titleElement).toBeInTheDocument();
});
