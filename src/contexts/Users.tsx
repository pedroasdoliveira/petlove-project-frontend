import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { UserTypes } from "types/interfaces";
import { api } from "../services";
import { useAuth } from "./Auth";

interface UsersContextProps {
  children: ReactNode;
}

interface UsersProviderData {
  users?: UserTypes[];
  user?: UserTypes;
  handleGetUsers: () => void;
}

const UsersContext = createContext({} as UsersProviderData);

export const UsersContextProvider = ({ children }: UsersContextProps) => {
  const [users, setUsers] = useState<UserTypes[]>([]);
  const [user, setUser] = useState<UserTypes>({} as UserTypes);

  const { logged } = useAuth();

  const handleGetUsers = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token") || "";
      const userLocal = JSON.parse(localStorage.getItem("user") || "");

      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (userLocal.isAdmin) {
        api.get("/User", headers).then((res) => setUsers(res.data));
        api
          .get(`/User/${userLocal.email}`, headers)
          .then((res) => setUser(res.data));
      } else {
        api
          .get(`/User/${userLocal.email}`, headers)
          .then((res) => setUser(res.data));
      }
    }
  };

  useEffect(() => {
    if (logged) handleGetUsers();
  }, [logged]);

  if (user.isAdmin) {
    return (
      <UsersContext.Provider value={{ users, user, handleGetUsers }}>
        {children}
      </UsersContext.Provider>
    );
  } else {
    return (
      <UsersContext.Provider value={{ user, handleGetUsers }}>
        {children}
      </UsersContext.Provider>
    );
  }
};

export const useUsers = () => useContext(UsersContext);
