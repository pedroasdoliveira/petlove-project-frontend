import { ReactNode } from "react";
import { ToggleContextProvider } from "./ToggleModeStyles";
import { AuthContextProvider } from "./Auth";
import { UsersContextProvider } from "./Users";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ToggleContextProvider>
      <AuthContextProvider>
        <UsersContextProvider>
          {children}
        </UsersContextProvider>
      </AuthContextProvider>
    </ToggleContextProvider>
  );
};

export default Providers;