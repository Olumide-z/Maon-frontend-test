import { render, screen } from "@testing-library/react";
import LandingPage from "@/components/landing-page/LandingPage";

jest.mock("../news/News", () => () => <div data-testid="news-section" />);

describe("LandingPage", () => {
  it("renders logo and news section", () => {
    render(<LandingPage />);
    expect(screen.getByAltText("Blott Logo")).toBeInTheDocument();
    expect(screen.getByTestId("news-section")).toBeInTheDocument();
  });
});
