// pages/api/data.ts

import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export  interface DataItem {
  id: number;
  name: string;
  age: number;
  email: string;
  status: string;
}

const data: DataItem[] = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    email: "john@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    email: "jane@example.com",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 22,
    email: "alice@example.com",
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Brown",
    age: 45,
    email: "bob@example.com",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Davis",
    age: 30,
    email: "charlie@example.com",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Diana Evans",
    age: 27,
    email: "diana@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "Edward Frank",
    age: 38,
    email: "edward@example.com",
    status: "Inactive",
  },
  {
    id: 8,
    name: "Grace Green",
    age: 29,
    email: "grace@example.com",
    status: "Active",
  },
  {
    id: 9,
    name: "Henry Hill",
    age: 42,
    email: "henry@example.com",
    status: "Active",
  },
  {
    id: 10,
    name: "Ivy Irving",
    age: 26,
    email: "ivy@example.com",
    status: "Inactive",
  },
];

export const GET = () => {
  return NextResponse.json({ data,code:200 }, { status: 200 });
};
