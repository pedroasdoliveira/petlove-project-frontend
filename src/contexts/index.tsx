import { ReactNode } from "react";
import { ToggleContextProvider } from "./ToggleModeStyles";
import { AuthContextProvider } from "./Auth";
import { UsersContextProvider } from "./Users";
import { SpecialtyssContextProvider } from "./specialtyss";
import { TestContextProvider } from "./testQuests";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ToggleContextProvider>
      <AuthContextProvider>
        <UsersContextProvider>
          <TestContextProvider>
            <SpecialtyssContextProvider>{children}</SpecialtyssContextProvider>
          </TestContextProvider>
        </UsersContextProvider>
      </AuthContextProvider>
    </ToggleContextProvider>
  );
};

export default Providers;
