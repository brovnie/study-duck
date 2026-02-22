export interface SessionsType {
  _id: string;
  admin: string;
  duration: number;
  startingTime: Date;
  participants: [
    {
      name: string;
      profilePic: string;
      level: string;
      _id: string;
    }
  ];
}
