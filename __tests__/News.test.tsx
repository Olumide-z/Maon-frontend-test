import { render, screen, waitFor } from "@testing-library/react";
import News from "@/components/news/News";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

describe("News component", () => {
  it("renders news headlines after loading", async () => {
    renderWithClient(<News />);
    
    expect(screen.getByText(/news/i)).toBeInTheDocument();

    // Wait for API data
    await waitFor(() => {
      expect(screen.getByText("Sample News 1")).toBeInTheDocument();
    });
  });

  it("displays skeletons during loading", () => {
    renderWithClient(<News />);
    const skeletons = screen.getAllByTestId("news-skeleton");
    expect(skeletons.length).toBeGreaterThan(0);
  });
});
