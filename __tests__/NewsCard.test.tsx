import { render, screen } from "@testing-library/react";
import NewsCard from "@/components/news/NewsCard";
import { NewsTypes } from "@/types";

const createMockNews = (overrides = {}): NewsTypes => ({
  id: 1,
  source: "BBC",
  datetime: 1719945000,
  headline: "Sample Headline",
  url: "https://bbc.com/sample-news-1",
  image: "/sample-image.jpg",
  category: "general",
  related: "economy",
  summary: "Test summary",
  ...overrides,
});


describe("NewsCard", () => {
  it("renders headline, source and formatted date", () => {
    render(<NewsCard news={createMockNews()} />);
    expect(screen.getByText("Sample Headline")).toBeInTheDocument();
    expect(screen.getByText("BBC")).toBeInTheDocument();
    expect(screen.getByText("02 Aug 2024")).toBeInTheDocument(); // adjust date based on datetime
  });
});
