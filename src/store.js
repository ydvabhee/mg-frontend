import {createContext} from "react";

// Contexts
export const gameContext = createContext({
  score: 0,
  setScore: (x) => {},
  moves: 0,
  setMoves: (x) => {},
  startTime: 0,
  setStartTime: (x) => {},
  data: [],
  setData: () => {},
})