import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ScoreBoard from "../src/components/ScroreBoard";
import { gameContext } from "../src/store";
import { fetchSummary } from "../src/services/game";

jest.mock("../src/services/game", () => ({
  fetchSummary: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("ScoreBoard Component", () => {
  it("fetches game summary and updates UI", async () => {
    fetchSummary.mockResolvedValue({ score: 100, moves: 10, time: "00:02:30" });

    render(
      <gameContext.Provider value={{ score: 0, setScore: jest.fn(), moves: 0, setMoves: jest.fn(), gameId: "test-game-id" }}>
        <MemoryRouter>
          <ScoreBoard />
        </MemoryRouter>
      </gameContext.Provider>
    );

    await waitFor(() => expect(fetchSummary).toHaveBeenCalledWith("test-game-id"));

    expect(await screen.findByText("Final Score: 100")).toBeInTheDocument();
    expect(await screen.findByText("Total Moves: 10")).toBeInTheDocument();
    expect(await screen.findByText("Time Taken: 00:02:30")).toBeInTheDocument();
  });

  it("navigates to home page if gameId is missing", () => {
    render(
      <gameContext.Provider value={{ gameId: null }}>
        <MemoryRouter>
          <ScoreBoard />
        </MemoryRouter>
      </gameContext.Provider>
    );

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
