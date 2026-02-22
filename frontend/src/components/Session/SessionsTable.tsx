"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useGetAvaliablePlannedSessions } from "@/hooks/queries/useGetAvaliablePlannedSessions";
import SessionTableRow from "./SessionTableRow";
import { SessionsType } from "./types";

const SessionsTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const sessions = useGetAvaliablePlannedSessions("one-on-one");
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const allSessions = sessions.data?.sessions || [];

  const paginatedSessions = allSessions.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="px-2">
      <div className="overflow-x-auto w-full">
        <TableContainer className="px-2" sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sessions table">
            <TableHead>
              <TableRow className="bg-slate-100 rounded-t-md px-2">
                <TableCell className="rounded-tl-md">Profile</TableCell>
                <TableCell>Level</TableCell>
                <TableCell>Starts at</TableCell>
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
              {paginatedSessions.map((session: SessionsType) => (
                <SessionTableRow key={session._id} session={session} />
              ))}
              {paginatedSessions.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <p className="text-center">No sessions found</p>{" "}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={allSessions.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </div>
  );
};

export default SessionsTable;
