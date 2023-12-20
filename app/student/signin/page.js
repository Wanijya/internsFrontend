"use client";
import { asyncsigninstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  useEffect(() => {
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);

  const SigninHandler = (e) => {
    const student = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(asyncsigninstudent(student));
  };

  return (
    <div className="container d-flex gap-3 flex-column mt-5 ">
      <h3>SigIn</h3>
      <form onSubmit={SigninHandler} className=" d-flex gap-3 flex-column">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            required
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            required
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Signin
        </button>
      </form>
      <Link className="" href="/student/forget">
        Forget Password ?
      </Link>
    </div>
  );
};

export default page;
