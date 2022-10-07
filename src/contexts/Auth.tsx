import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "services";
import toast from "react-hot-toast";

import Router from "next/router";

interface Props {
  children: ReactNode;
}

interface AuthData {
  logged: boolean;
  login?: (params: any) => void;
  logout?: () => void;
  checkTokenExpiration?: () => void;
}

interface LoginParams {
  token: string;
  user: any;
}

export const AuthContext = createContext<AuthData>({} as AuthData);

export const AuthContextProvider = ({ children }: Props) => {
  const [logged, setLogged] = useState<boolean>(false);

  const login = ({ token, user }: LoginParams) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setLogged(true);
  };

  const logout = () => {
    let token: any;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token") || false;
    }
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    setLogged(false);
    Router.push("/");
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
        .then((response) => {
          setLogged(true);
        })
        .catch((error) => {
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
      value={{ logged, login, logout, checkTokenExpiration }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
