"use client";
import { asyncforgetpasswordStudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.studentReducer);

  const sendemailHandler = async (e) => {
    e.preventDefault();
    const email = {
      email: e.target.emailaddrs.value,
    };
    await dispatch(asyncforgetpasswordStudent(email));
    if (errors.length === 1) {
      router.push("/student/forget/otp");
    } else {
      toast.error(JSON.stringify(errors));
      return;
    }
  };
  return (
    <div className="container d-flex gap-3 flex-column mt-5">
      <h3>Forget Password</h3>
      <form onSubmit={sendemailHandler} className=" d-flex gap-3 flex-column">
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
        <button type="submit" className="btn btn-outline-primary">
          Send Mail
        </button>
        {/* <Link onClick={forgotPasswordHandler} href="/student/forgot/sendmail" className='btn btn-danger'>Send Mail</Link> */}
      </form>
    </div>
  );
};

export default page;
