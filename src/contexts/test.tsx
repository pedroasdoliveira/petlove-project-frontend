import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "services";
import { useAuth } from "./Auth";

interface TestContextProps {
  children: ReactNode;
}

interface TestProviderData {
  test?: any[];
  handleGetTest: () => void;
}

const TestContext = createContext<TestProviderData>({} as TestProviderData);

export const TestContextProvider = ({ children }: TestContextProps) => {
  const [test, setTest] = useState<any>({} as any);

  const { logged } = useAuth();

  const handleGetTest = () => {
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
      .get(`/Test/allTests`, headers)
      .then((res) => {
        setTest(res.data[0]);
      })
      .catch((err) => console.log(err));
  };

  console.log(test);

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
