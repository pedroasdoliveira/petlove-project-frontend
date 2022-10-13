import { ReactNode } from "react";
import { ToggleContextProvider } from "./ToggleModeStyles";
import { AuthContextProvider } from "./Auth";
import { UsersContextProvider } from "./Users";
import { SpecialtysContextProvider } from "./specialtys";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ToggleContextProvider>
      <AuthContextProvider>
        <UsersContextProvider>
          <SpecialtysContextProvider>
            {children}
          </SpecialtysContextProvider>
        </UsersContextProvider>
      </AuthContextProvider>
    </ToggleContextProvider>
  );
};

export default Providers;
