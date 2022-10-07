import { ReactNode } from "react";
import { ToggleContextProvider } from "./ToggleModeStyles";
import { UserContextProvider } from "./User";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ToggleContextProvider>
      <UserContextProvider>
        {children}
      </UserContextProvider>
    </ToggleContextProvider>
  );
};

export default Providers;