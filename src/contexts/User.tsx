import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

interface UserData {
  logged: boolean;
  login?: (params: any) => void;
  logout?: () => void;
  requisition?: boolean;
  setRequisition?: (value: boolean) => void;
}

export const UserContext = createContext<UserData>({} as UserData);

export const UserContextProvider = ({ children }: Props) => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ logged }}>
      {children}
    </UserContext.Provider>
  );
};
