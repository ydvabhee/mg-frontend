import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Grid from "../src/components/Grid";
import { gameContext } from "../src/store";
import { BrowserRouter } from "react-router-dom";
import { makeMove } from "../src/services/game";

jest.mock("../src/services/game", () => ({
  makeMove: jest.fn(),
}));

jest.mock("react-hot-toast", () => ({
  success: jest.fn(),
}));

describe("Grid Component", () => {
  const mockContextValue = {
    gameId: "123",
    setScore: jest.fn(),
    setMoves: jest.fn(),
    setStartTime: jest.fn(),
  };

  const mockCards = [
    { _id: "1", url: "test1.jpg", title: "Card 1" },
    { _id: "2", url: "test2.jpg", title: "Card 2" },
    { _id: "3", url: "test3.jpg", title: "Card 3" },
    { _id: "4", url: "test4.jpg", title: "Card 4" },
  ];

  it("renders Grid component correctly", () => {
    render(
      <gameContext.Provider value={mockContextValue}>
        <BrowserRouter>
          <Grid cards={mockCards} />
        </BrowserRouter>
      </gameContext.Provider>
    );
    expect(screen.getByAltText("Card 1")).toBeInTheDocument();
    expect(screen.getByAltText("Card 2")).toBeInTheDocument();
    expect(screen.getByAltText("Card 3")).toBeInTheDocument();
    expect(screen.getByAltText("Card 4")).toBeInTheDocument();
  });

  it("flips a card when clicked", async () => {
    render(
      <gameContext.Provider value={mockContextValue}>
        <BrowserRouter>
          <Grid cards={mockCards} />
        </BrowserRouter>
      </gameContext.Provider>
    );

    const card = screen.getByAltText("Card 1");
    await act(async () => {
      fireEvent.click(card);
    });

    expect(card).toBeInTheDocument();
  });

  it("makes a move when two cards are selected", async () => {
    makeMove.mockResolvedValue({
      moves: 1,
      startTime: Date.now(),
      score: 10,
      validMove: true,
      endTime: 0,
    });

    render(
      <gameContext.Provider value={mockContextValue}>
        <BrowserRouter>
          <Grid cards={mockCards} />
        </BrowserRouter>
      </gameContext.Provider>
    );

    const card1 = screen.getByAltText("Card 1");
    const card2 = screen.getByAltText("Card 2");

    await act(async () => {
      fireEvent.click(card1);
      fireEvent.click(card2);
    });

    expect(makeMove).toHaveBeenCalledWith("123", ["1", "2"]);
    expect(mockContextValue.setMoves).toHaveBeenCalled();
    expect(mockContextValue.setScore).toHaveBeenCalled();
  });
});
