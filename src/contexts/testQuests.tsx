import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { TestTypes } from "types/interfaces";
import { api } from "../services";
import { useAuth } from "./Auth";

interface TestContextProps {
  children: ReactNode;
}

interface TestProviderData {
  test?: TestTypes[];
  handleGetTest: () => void;
}

const TestContext = createContext<TestProviderData>({} as TestProviderData);

export const TestContextProvider = ({ children }: TestContextProps) => {
  const [test, setTest] = useState<TestTypes[]>({} as TestTypes[]);

  const { logged } = useAuth();

  const handleGetTest = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token") || "";
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      api
        .get(`/Test/allTests`, headers)
        .then((res) => {
          setTest(res.data[0]);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (logged) handleGetTest();
  }, [logged]);

  return (
    <TestContext.Provider value={{ test, handleGetTest }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => useContext(TestContext);
