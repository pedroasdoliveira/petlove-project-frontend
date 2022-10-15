import { ReactNode } from "react";
import { ToggleContextProvider } from "./ToggleModeStyles";
import { AuthContextProvider } from "./Auth";
import { UsersContextProvider } from "./Users";
import { SpecialtysContextProvider } from "./specialtys";
import { TestContextProvider } from "./test";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ToggleContextProvider>
      <AuthContextProvider>
        <UsersContextProvider>
          <TestContextProvider>
            <SpecialtysContextProvider>{children}</SpecialtysContextProvider>
          </TestContextProvider>
        </UsersContextProvider>
      </AuthContextProvider>
    </ToggleContextProvider>
  );
};

export default Providers;
