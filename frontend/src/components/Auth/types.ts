export interface AppErrorType extends Error {
  input?: string;
}

export interface UserAuthProps {
  status: "success" | "error" | "failed";
  token: string;
  data: {
    user: {
      id: string;
      name: string;
      email?: string;
      timezone?: string;
      institute?: string;
      profilePic?: string;
      accountCompleted: boolean;
    };
  };
}
