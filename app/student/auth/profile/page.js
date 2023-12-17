"use client";
import {
  asyncUpdateStudent,
  asyncavatarStudent,
  asyncresetpasswordStudent,
} from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);
  const updateStudentHandler = () => {
    const updateStudent = {
      firstname: "wanijya",
      lastname: "bisen",
    };
    dispatch(asyncUpdateStudent(updateStudent));
  };

  const AvatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    dispatch(asyncavatarStudent(formdata));
  };

  const ResetPasswordHandler = () => {
    const pwd = {
      password: "12345678",
    };
    dispatch(asyncresetpasswordStudent(pwd));
  };
  return (
    <div className="container mt-3">
      <img height={200} src={student && student.avatar.url} alt="" />
      <form onSubmit={AvatarHandler} encType="multipart/form-data">
        <input type="file" name="avatar" />
        <button>Submit</button>
      </form>
      <br />
      <br />
      <button onClick={updateStudentHandler} className="btn btn-warning me-5">
        Upadte Student
      </button>
      <button onClick={ResetPasswordHandler} className="btn btn-danger">
        Reset Student Password
      </button>
    </div>
  );
};

export default page;
