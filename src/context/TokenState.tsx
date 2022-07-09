import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";

interface TokenContextType {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (tokens: {
    accessToken: string | null;
    refreshToken: string | null;
  }) => void;
}

interface TokensType {
  accessToken: string | null;
  refreshToken: string | null;
}

const TokenContext = createContext<TokenContextType>({
  accessToken: null,
  refreshToken: null,
  setTokens: (tokens) => {
    console.error(
      `TokenProvider does not exists, accessToken: ${tokens.accessToken}, refreshToken: ${tokens.refreshToken}`
    );
  },
});

export const TokenWrapper = ({ children }: { children: ReactNode }) => {
  const [{ accessToken, refreshToken }, setTokens] = useState<TokensType>({
    accessToken: null,
    refreshToken: null,
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    setTokens({ accessToken, refreshToken });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return () => {
      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
      }
      if (refreshToken) {
        localStorage.setItem("refresh_token", refreshToken);
      }
    };
  }, []);

  return (
    <TokenContext.Provider value={{ accessToken, refreshToken, setTokens }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  return useContext(TokenContext);
};
