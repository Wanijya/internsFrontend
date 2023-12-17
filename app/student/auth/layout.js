"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const StudentAuth = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if (!isAuthenticated) router.push("/student/");
  }, [isAuthenticated]);
  return children;
};

export default StudentAuth;
