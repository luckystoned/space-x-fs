import {
  useState,
  useEffect,
  createContext,
  SetStateAction,
  Dispatch,
  ReactElement,
} from "react";
import { useNavigate } from "react-router";
import axios from "utils/axios";

interface AuthProviderValue {
  token?: string | null;
  setToken?: Dispatch<SetStateAction<string | null>>;
}

export const AuthContext = createContext<AuthProviderValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("token", token);
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
