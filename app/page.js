"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { asynccurrentstudent} from "@/store/Actions/studentActions";
import { useDispatch } from "react-redux";

// export const metadata = {
//   title: "Homepage",
// };

const page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentstudent()) 
  }, []);

  return (
    <div>
      <Link href="/student">Student</Link>
    </div>
  );
};

export default page;
