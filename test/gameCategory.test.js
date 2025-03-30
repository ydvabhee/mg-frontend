import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GameCategory from "../src/components/GameCategory"; // Adjust path if needed
import { gameContext } from "../src/store";
import {fetchTheme} from "../src/services/theme";


jest.mock("../src/services/theme", () => ({
  fetchTheme: jest.fn(),
}));


const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("GameCategory Component", () => {
  const setSelectedThemeId = jest.fn();
  const mockContextValue = { setSelectedThemeId };

  const renderComponent = () =>
    render(
      <gameContext.Provider value={mockContextValue}>
        <BrowserRouter>
          <GameCategory />
        </BrowserRouter>
      </gameContext.Provider>
    );

  it("shows loading state initially", () => {
    fetchTheme.mockResolvedValueOnce([]);
    renderComponent();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays 'No themes' when API returns an empty list", async () => {
    fetchTheme.mockResolvedValueOnce([]);
    renderComponent();
    await waitFor(() => expect(screen.getByText("No themes")).toBeInTheDocument());
  });

  it("renders categories correctly when API returns data", async () => {
    const mockThemes = [
      { _id: "1", name: "Animal", description: "Animal games" },
      { _id: "2", name: "Fruit", description: "Fruit games" },
    ];
    fetchTheme.mockResolvedValueOnce(mockThemes);

    renderComponent();

    await waitFor(() => {
      expect(screen.getByText("Select a category")).toBeInTheDocument();
      expect(screen.getByText("Animal")).toBeInTheDocument();
      expect(screen.getByText("Fruit")).toBeInTheDocument();
    });
  });

  it("navigates to the correct route and sets theme ID on click", async () => {
    const mockThemes = [{ _id: "1", name: "Animal", description: "Animal games" }];
    fetchTheme.mockResolvedValueOnce(mockThemes);

    renderComponent();
    await waitFor(() => expect(screen.getByText("Animal")).toBeInTheDocument());

    const categoryCard = screen.getByText("Animal");
    fireEvent.click(categoryCard);

    expect(setSelectedThemeId).toHaveBeenCalledWith("1");
    expect(mockNavigate).toHaveBeenCalledWith("/game/Animal");
  });
});
