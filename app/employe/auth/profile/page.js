"use client";
import {
  asyncUpdateEmploye,
  asyncavataremploye,
  asyncresetpasswordemploye,
} from "@/store/Actions/employeActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { employe } = useSelector((state) => state.employeReducer);
  const updateemployeHandler = () => {
    const updateEmploye = {
      firstname: "wanijya",
      lastname: "bisen",
    };
    dispatch(asyncUpdateEmploye(updateEmploye));
  };

  const AvatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("organizationlogo", e.target.organizationlogo.files[0]);
    dispatch(asyncavataremploye(formdata));
  };

  const ResetPasswordHandler = () => {
    const pwd = {
      password: "12345678",
    };
    dispatch(asyncresetpasswordemploye(pwd));
  };
  return (
    <div className="container mt-3">
      <img height={200} src={employe && employe.organizationlogo.url} alt="" />
      <form onSubmit={AvatarHandler} encType="multipart/form-data">
        <input type="file" name="organizationlogo" />
        <button>Submit</button>
      </form>
      <br />
      <br />
      <h2>
        {employe &&
          "Hello, " +
            employe.firstname[0].toUpperCase() +
            employe.firstname.slice(1) +
            "! 👌"}
      </h2>
      <br />
      {employe && (
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">
                  Organization Name:{" "}
                  {employe.organizationname[0].toUpperCase() +
                    employe.organizationname.slice(1)}{" "}
                </h2>
                <h5 className="card-title">
                  Employer Name:{" "}
                  {employe.firstname[0].toUpperCase() +
                    employe.firstname.slice(1)}{" "}
                  {employe.lastname[0].toUpperCase() +
                    employe.lastname.slice(1)}
                </h5>
                <p className="card-text">Email: {employe.email}</p>
                <p className="card-text">Contact : +91-{employe.contact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <br />
      <button onClick={updateemployeHandler} className="btn btn-warning me-5">
        Upadte employe
      </button>
      <button onClick={ResetPasswordHandler} className="btn btn-danger">
        Reset employe Password
      </button>
    </div>
  );
};

export default page;
