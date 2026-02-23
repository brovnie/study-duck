export interface SessionTypes {
  _id: string;
  admin: string;
  duration: number;
  startingTime: Date;
  type: string;
  participants: [
    {
      name: string;
      profilePic: string;
      level: string;
      _id: string;
    }
  ];
}
