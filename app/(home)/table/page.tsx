// app/page.tsx

"use client";

import React, { useState, useEffect } from "react";

import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";

interface DataItem {
  id: number;
  name: string;
  age: number;
  email: string;
  status: string;
}

const TablePage = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetch("/api/table")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TablePage;
