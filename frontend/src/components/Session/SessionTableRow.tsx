import { formatMinutesToHours } from "@/lib/utils";
import { Avatar, TableCell, TableRow } from "@mui/material";
import CustomLink from "../UI/Link";
import { levels } from "@/data/levels";
import { SessionsType } from "./types";
import CountdownTimer from "../UI/CountdownTimer";

const SessionTableRow = ({ session }: { session: SessionsType }) => {
  const duckLevelColor = levels.find(
    (lv) => lv.name === session.participants[0].level
  )?.color;

  return (
    <TableRow key={session._id} className="even:bg-rod-500">
      <TableCell component="th" scope="row">
        <div className="flex flex-row items-center gap-2">
          <Avatar
            className="shadow-md"
            src={session.participants[0].profilePic}
          />{" "}
          <span>{session.participants[0].name}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex flex-row items-center gap-2">
          <svg
            className={duckLevelColor}
            width="25"
            height="23"
            viewBox="0 0 25 23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.9959 8.8716C22.7128 8.58036 22.2004 8.6241 21.9837 8.96037C21.6545 9.47148 21.1802 9.88702 20.6757 10.2192C19.5537 10.9586 18.1947 11.3259 16.8163 11.3259H13.0111C12.6879 11.3259 12.535 11.1582 12.4851 10.911C12.4203 10.591 12.5672 10.2661 12.8416 10.061C14.2301 9.02288 15.1182 7.43893 15.1182 5.66288C15.1182 2.40309 12.1291 -0.213326 8.53872 0.013743C5.7949 0.187219 3.53187 2.05654 2.96504 4.47215C2.93857 4.58484 2.84223 4.67195 2.71982 4.69587C1.80066 4.87553 0.841718 4.9574 0.29546 4.99218C0.0687431 5.00675 -0.0671775 5.22867 0.0339237 5.41614C0.704275 6.65928 1.88376 7.54382 2.93701 8.12989C3.36687 8.36912 3.74586 8.67848 4.04729 9.04856L4.06813 9.07417C4.34142 9.40968 4.40934 9.8571 4.22428 10.2404C4.0791 10.5412 3.8803 10.6787 3.8803 10.6787C1.39738 12.7125 0.88817 14.5812 0.895197 16.1798C0.902223 18.3172 2.18109 20.122 4.18056 21.2053C8.97451 23.8025 15.4712 23.1209 18.537 22.0207C20.8848 21.1777 23.1177 19.7391 24.0964 17.6004C26.0987 13.2249 24.2563 10.1684 22.9959 8.8716Z"
              fillOpacity="0.5"
            />
          </svg>
          <span>{session.participants[0].level}</span>
        </div>
      </TableCell>
      <TableCell>
        <CountdownTimer
          eventDate={session.startingTime}
          queries={["user", "sessions", "planned-available", "one-on-one"]}
        />
      </TableCell>
      <TableCell>{formatMinutesToHours(session.duration)}</TableCell>
      <TableCell>
        <CustomLink
          href={`/study-session/${session._id}`}
          text="Join"
          variant="primary"
        />
      </TableCell>
    </TableRow>
  );
};

export default SessionTableRow;
