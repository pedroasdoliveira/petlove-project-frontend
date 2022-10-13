import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "services";
import { useAuth } from "./Auth";

interface SpecialtysContextProps {
  children: ReactNode;
}

interface SpecialtysProviderData {
  specialtys?: any[];
  handleGetSpecialtys: () => void;
}

const SpecialtysContext = createContext<SpecialtysProviderData>({} as SpecialtysProviderData);

export const SpecialtysContextProvider = ({ children }: SpecialtysContextProps) => {
  const [specialtys, setSpecialtys] = useState<any[]>([]);

  const { logged } = useAuth();

  const handleGetSpecialtys = () => {
    let token: any;

    if (typeof window !== "undefined") {
      token = localStorage.getItem("token") || "";
    }

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

      api.get(`/Specialty`, headers).then((res) => setSpecialtys(res.data)).catch((err) => console.log(err));
  };

  useEffect(() => {
    if (logged) handleGetSpecialtys();
  }, [logged]);

    return (
      <SpecialtysContext.Provider value={{ specialtys, handleGetSpecialtys }}>
        {children}
      </SpecialtysContext.Provider>
    );
};

export const useSpecialtys = () => useContext(SpecialtysContext);
