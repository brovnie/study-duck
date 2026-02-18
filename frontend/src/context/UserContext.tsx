"use client";
import { useGetCurrentUser } from "@/hooks/queries/useGetCurrentUser";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  id: string;
  name: string;
  profilePic: string;
  institute: string;
  timeZone: string;
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => Promise<void>;
  updateUser: (updates: Partial<User>) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const { data, isLoading, isError, isSuccess } = useGetCurrentUser();

  useEffect(() => {
    if (data) setUser(data.data);
  }, [data]);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = async () => {
    //logout user go to api user/logout
    setUser(null);
  };

  const updateUser = (updates: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : prev));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading: isLoading,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
