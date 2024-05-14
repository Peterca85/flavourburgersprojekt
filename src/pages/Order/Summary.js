// summary.js

import React from "react";
import { useLocation } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import "../../styles/Summary.css";

function Summary() {
  const location = useLocation();
  const cartTotal = location.state.cartTotal;
  const tableData = location.state.tableData;

  return (
    <div className="table-container">
      <h1> Grattis till ditt köp</h1>
      <h1>Sammanfattning</h1>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Namn</TableCell>
              <TableCell>Efternamn</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Adress</TableCell>
              <TableCell>Postnummer</TableCell>
              <TableCell>Stad</TableCell>
              <TableCell>Telefon</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.lastname}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.zip}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <h2>Betalt: {cartTotal} kr</h2>
    </div>
  );
}

export default Summary;
