"use client";
import {
  Avatar,
  AvatarGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import CustomLink from "../UI/Link";

const AllSessions = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer className="px-2 py-2" sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="group sessions table">
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
              backgroundColor: "#f8fafc",
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={1}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default AllSessions;
