import { createContext, useState } from "react";
import fakeData from "fakeData.json";

export const FanLetterContext = createContext(null);

function FanLetterContextProvider({ children }) {
  const [fanLetters, setFanLetter] = useState(fakeData);

  return (
    <FanLetterContext.Provider value={{ fanLetters, setFanLetter }}>
      {children}
    </FanLetterContext.Provider>
  );
}

export default FanLetterContextProvider;
