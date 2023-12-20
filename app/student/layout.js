"use client";
import {
  asynccurrentstudent,
  asyncsignoutstudent,
} from "@/store/Actions/studentActions";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const StudentLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  useEffect(() => {
    dispatch(asynccurrentstudent());
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);

  const SignoutHandler = () => {
    dispatch(asyncsignoutstudent());
  };
  return (
    <>
      <nav className="container mt-5">
        <Link href={isAuthenticated ? "/student/auth" : "/student"}>Home</Link>{" "}
        <br />
        {isAuthenticated ? (
          <>
            <Link href="/student/auth/profile">profile</Link>
            <br />
            <Link href="/student/auth/applied">My Applications</Link>
            <br />
            <Link onClick={SignoutHandler} href="">
              Signout
            </Link>
          </>
        ) : (
          <>
            <Link href="/student/signup">Signup</Link> <br />
            <Link href="/student/signin">Signin</Link>
          </>
        )}
      </nav>
      {children}
    </>
  );
};

export default StudentLayout;
