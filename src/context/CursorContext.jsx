import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <CursorContext.Provider
      value={{
        enabled,
        setEnabled,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);