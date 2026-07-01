"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";


type AuthContextType = {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);



export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem('access_token');
});



  function login(newToken: string) {
    localStorage.setItem('access_token', newToken);
    setToken(newToken);
    console.log("auth login response:", newToken);
  }

  function logout() {
    localStorage.removeItem('access_token');
    setToken(null);
  }

  const value: AuthContextType = {
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}