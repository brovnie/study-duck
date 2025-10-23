import {
  Avatar,
  AvatarGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import CustomLink from "../UI/Link";

const AllSessions = () => {
  return (
    <TableContainer className="px-2 py-2">
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-slate-100 rounded-t-md px-2">
            <TableCell className="rounded-tl-md">Participants</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell className="rounded-tr-md">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            "& tr:nth-of-type(even)": {
              backgroundColor: "#f8fafc", // Tailwind red-500
            },
          }}
        >
          <TableRow className="even:bg-rod-500">
            <TableCell component="th" scope="row">
              <div className="flex flex-row items-center gap-2">
                <AvatarGroup max={5}>
                  <Avatar className="shadow-md" />
                  <Avatar className="shadow-md" />
                  <Avatar className="shadow-md" />
                  <Avatar className="shadow-md" />
                </AvatarGroup>
              </div>
            </TableCell>
            <TableCell>4/5</TableCell>
            <TableCell>1 hour</TableCell>
            <TableCell>1 hour</TableCell>
            <TableCell>
              <CustomLink href="" text="Join" variant="primary" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <div className="flex flex-row items-center gap-2">
                <AvatarGroup max={5}>
                  <Avatar className="shadow-md" />
                  <Avatar className="shadow-md" />
                  <Avatar className="shadow-md" />
                  <Avatar className="shadow-md" />
                  <Avatar className="shadow-md" />
                </AvatarGroup>
              </div>
            </TableCell>
            <TableCell>
              5/5 <span className="font-bold">FULL</span>
            </TableCell>
            <TableCell>1 hour</TableCell>
            <TableCell>1 hour</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllSessions;
