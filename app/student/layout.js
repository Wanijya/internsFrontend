"use client";
import {
  asynccurrentstudent,
  asyncsignoutstudent,
} from "@/store/Actions/studentActions";
import NavigationforStudent from "@/components/NavigationforStudent";
import Footer from "@/components/Footer";
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
    <div>
      <NavigationforStudent />
      {children}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default StudentLayout;
