"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface GlobalContextType {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
}

const GlobalProvider = createContext<GlobalContextType | null>(null);

export const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [url, setUrl] = useState("");

  return (
    <GlobalProvider.Provider value={{ url, setUrl }}>
      {children}
    </GlobalProvider.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalProvider);
  if (!context) {
    throw new Error("Context is not working!");
  }
  return context;
};
