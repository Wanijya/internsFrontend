"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

// export const metadata = {
//   title: "Student | Homepage",
// };

const page = () => {
  const router = useRouter();

  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  useEffect(() => {
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);

  return (
    <div className="container mt-5">
      <Link className="me-4 btn btn-danger" href="/student/signin">
        Signin
      </Link>
      <Link className="btn btn-success" href="/student/signup">
        Signup
      </Link>
    </div>
  );
};

export default page;
