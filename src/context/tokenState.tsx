import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";

interface TokenContextType {
  accessToken: string | null;
  refreshToken: string | null;
  setToken: (accessToken: string | null, refreshToken: string | null) => void;
}

interface JWT {
  accessToken: string | null;
  refreshToken: string | null;
}

const TokenContext = createContext<TokenContextType>({
  accessToken: null,
  refreshToken: null,
  setToken: (accessToken, refreshToken) => {
    console.error(
      `TokenProvider does not exists, accessToken: ${accessToken}, refreshToken: ${refreshToken}`
    );
  },
});

export const TokenWrapper = ({ children }: { children: ReactNode }) => {
  const [{ accessToken, refreshToken }, setJWT] = useState<JWT>({
    accessToken: null,
    refreshToken: null,
  });

  function setToken(accessToken: string | null, refreshToken: string | null) {
    if (accessToken === null) {
      localStorage.removeItem("access_token");
    } else {
      localStorage.setItem("access_token", accessToken);
    }
    if (refreshToken === null) {
      localStorage.removeItem("refresh_token");
    } else {
      localStorage.setItem("refresh_token", refreshToken);
    }
    setJWT({ accessToken, refreshToken });
  }

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    setJWT({ accessToken, refreshToken });
  }, []);

  return (
    <TokenContext.Provider value={{ accessToken, refreshToken, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  return useContext(TokenContext);
};
