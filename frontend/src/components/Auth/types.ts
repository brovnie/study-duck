export interface AppErrorType extends Error {
  input?: string;
}

export interface UserAuthProps {
  status: "success" | "error" | "failed";
  token: string;
  data: {
    user: {
      accountCompleted: boolean;
      email: string;
      name: string;
      timezone: string;
      id: string;
    };
  };
}
