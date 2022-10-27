import { createContext, ReactNode, useState } from "react";

export const ToggleContext = createContext({});

interface Props {
  children: ReactNode;
}

export const ToggleContextProvider = ({ children }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
