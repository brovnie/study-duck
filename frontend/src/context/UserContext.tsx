"use client";
import { useLogout } from "@/hooks/mutations/useLogout";
import { useGetCurrentUser } from "@/hooks/queries/useGetCurrentUser";
import { useRouter } from "next/navigation";
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
  token: string | null;
  setTemporaryToken: (token: string) => void;
  login: (userData: User, token: string) => void;
  logout: () => Promise<void>;
  updateUser: (updates: Partial<User>) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { data, isLoading } = useGetCurrentUser();
  const logoutUser = useLogout();
  const router = useRouter();

  useEffect(() => {
    if (data) setUser(data.data);
  }, [data]);

  const login = (userData: User, token: string) => {
    setToken(token);
    setUser(userData);
  };

  const logout = async () => {
    logoutUser.mutate(undefined, {
      onSuccess: () => {
        setUser(null);
        setToken(null);
        router.push("/");
      },
    });
  };

  const updateUser = (updates: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : prev));
  };

  const setTemporaryToken = (token: string) => {
    setToken(token);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        setTemporaryToken,
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
