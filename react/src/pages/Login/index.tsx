// @ts-nocheck
import { login } from "api";
import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import "./index.scss";

export const Login = () => {

  const { setToken } = useContext(AuthContext);

  const handleLogin = async () => {
    const token = await login();
    setToken(token);
  };

  return (
    <div className="login-page">
      <img
        src="https://www.deptagency.com/wp-content/themes/dept/public/logo-light-new.svg"
        alt="DEPT®"
        title="DEPT®"
      />
      <button onClick={handleLogin} className="glow-on-hover">
        LOG IN
      </button>
    </div>
  );
};
