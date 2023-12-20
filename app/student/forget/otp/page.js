"use client";
import {
  asyncotppasswordStudent,
  asyncforgetpasswordStudent,
} from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { errors } = useSelector((state) => state.studentReducer);

  const sendotpHandler = async (e) => {
    e.preventDefault();
    const newpwd = {
      email: e.target.emailaddrs.value,
      otp: e.target.otp.value,
      password: e.target.password.value,
    };
    await dispatch(asyncotppasswordStudent(newpwd));

    if (errors.length === 1) {
      router.push("/student/signin");
    } else {
      toast.error(JSON.stringify(errors));
      return;
    }
  };

  return (
    <div>
      <div className="container d-flex gap-3 flex-column mt-5 ">
        <h3>Set New Password</h3>
        <form onSubmit={sendotpHandler} className=" d-flex gap-3 flex-column">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              required
              type="email"
              name="emailaddrs"
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

          <div className="form-group">
            <label htmlFor="opt">OTP</label>
            <input
              required
              type="text"
              name="opt"
              className="form-control"
              id="otp"
              placeholder="OTP"
            />
          </div>

          <button type="submit" className="btn btn-outline-primary">
            Change Password
          </button>
        </form>
      </div>

      {/* <button onClick={changePasswordHandler} className='btn btn-primary'>Change Password</button> */}
    </div>
  );
};

export default page;
