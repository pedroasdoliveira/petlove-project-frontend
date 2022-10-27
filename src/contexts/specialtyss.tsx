import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../services";
import { useAuth } from "./Auth";
import { useUsers } from "./Users";

interface SpecialtyssContextProps {
  children: ReactNode;
}

interface SpecialtyssProviderData {
  specialtyss?: any[];
  handleGetSpecialtyss: () => void;
}

const SpecialtyssContext = createContext<SpecialtyssProviderData>(
  {} as SpecialtyssProviderData,
);

export const SpecialtyssContextProvider = ({
  children,
}: SpecialtyssContextProps) => {
  const [specialtyss, setSpecialtyss] = useState<any[]>([]);

  const { logged } = useAuth();
  const { user } = useUsers();

  const handleGetSpecialtyss = () => {
    let token: any;

    if (typeof window !== "undefined") {
      token = localStorage.getItem("token") || "";
    }

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get(`/Specialty`, headers)
      .then((res) => setSpecialtyss(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (logged) handleGetSpecialtyss();
  }, [logged, user]);

  return (
    <SpecialtyssContext.Provider value={{ specialtyss, handleGetSpecialtyss }}>
      {children}
    </SpecialtyssContext.Provider>
  );
};

export const useSpecialtyss = () => useContext(SpecialtyssContext);
