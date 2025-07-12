import { rest } from "msw";

export const handlers = [
  rest.get("/api/news", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "1",
          source: "BBC",
          datetime: 1719945000,
          headline: "Sample News 1",
          url: "https://bbc.com/sample-news-1",
          image: "/sample-image.jpg"
        }
      ])
    );
  }),
];
