import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { SpecialtiesType } from "types/interfaces";
import { api } from "../services";
import { useAuth } from "./Auth";
import { useUsers } from "./Users";

interface SpecialtiesContextProps {
  children: ReactNode;
}

interface SpecialtiesProviderData {
  specialties?: SpecialtiesType[];
  handleGetSpecialties: () => void;
}

const SpecialtiesContext = createContext<SpecialtiesProviderData>(
  {} as SpecialtiesProviderData
);

export const SpecialtiesContextProvider = ({
  children,
}: SpecialtiesContextProps) => {
  const [specialties, setSpecialties] = useState<SpecialtiesType[]>([]);

  const { logged } = useAuth();
  const { user } = useUsers();

  const handleGetSpecialties = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token") || "";

      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      api
        .get(`/Specialty`, headers)
        .then((res) => setSpecialties(res.data))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (logged) handleGetSpecialties();
  }, [logged, user]);

  return (
    <SpecialtiesContext.Provider value={{ specialties, handleGetSpecialties }}>
      {children}
    </SpecialtiesContext.Provider>
  );
};

export const useSpecialties = () => useContext(SpecialtiesContext);
