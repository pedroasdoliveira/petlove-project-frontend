import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services";
import toast from "react-hot-toast";

import Router from "next/router";
import { UserStorageType } from "types/interfaces";

interface Props {
  children: ReactNode;
}

interface AuthData {
  logged: boolean;
  requisition: boolean;
  login?: (params: any) => void;
  logout?: () => void;
  checkTokenExpiration?: () => void;
  setRequisition: (params: any) => void;
}

interface LoginParams {
  token: string;
  user: UserStorageType;
}

export const AuthContext = createContext<AuthData>({} as AuthData);

export const AuthContextProvider = ({ children }: Props) => {
  const [logged, setLogged] = useState<boolean>(false);
  const [requisition, setRequisition] = useState<boolean>(false);

  const login = ({ token, user }: LoginParams) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setLogged(true);
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token") || false;

      if (token) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      setLogged(false);
      Router.push("/");
    }
  };

  const checkTokenExpiration = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "");
      const token = localStorage.getItem("token") || "";

      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await api
        .get(`/User/${user.email}`, headers)
        .then(() => {
          setLogged(true);
        })
        .catch(() => {
          toast.error("Sessão expirada, faça login novamente!");
          logout();
        });
    } catch (error) {
      toast.error("Sessão expirada, faça login novamente!");
      logout();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      checkTokenExpiration();
    }
  });

  return (
    <AuthContext.Provider
      value={{
        logged,
        login,
        logout,
        checkTokenExpiration,
        requisition,
        setRequisition,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
