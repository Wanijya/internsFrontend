"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { student } = useSelector((state) => state.studentReducer);
  return (
    <div className="container mt-5">
      <h1>
        Applied Jobs & Internships by
        <strong>{student && student.firstname}</strong>
      </h1>
      <ul className="list-group">
        {student &&
          student.jobs.map((j) => (
            <div className="list-group-item mb-3" key={j._id}>
              {JSON.stringify(j)}
            </div>
          ))}

        {student &&
          student.internships.map((intern) => (
            <div className="list-group-item mb-3" key={intern._id}>
              {JSON.stringify(intern)}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default page;
