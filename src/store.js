import {createContext} from "react";

// Contexts
export const gameContext = createContext({
  score: 0,
  setScore: (args) => {},
  moves: 0,
  setMoves: (args) => {},
  startTime: 0,
  setStartTime: (args) => {},
  data: [],
  setData: () => {},
  selectedThemeId: "",
  setSelectedThemeId: (args) => {},
  gameId: "",
  setGameId: (args) => {},
})