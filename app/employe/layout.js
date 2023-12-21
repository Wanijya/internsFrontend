"use client";
import Navigationforemploye from "@/components/Navigationforemploye";
import Footer from "@/components/Footer";
import {
  asynccurrentemploye,
  asyncsignoutemploye,
} from "@/store/Actions/employeActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const employeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);

  useEffect(() => {
    dispatch(asynccurrentemploye());
    if (isAuthenticated) router.push("/employe/auth");
  }, [isAuthenticated]);

  const SignoutHandler = () => {
    dispatch(asyncsignoutemploye());
  };

  return (
    <div>
      <Navigationforemploye />
      {children}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default employeLayout;
