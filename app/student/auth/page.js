"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncapplyinternshipstudent,
  asyncapplyjobstudent,
} from "@/store/Actions/studentActions";

const page = () => {
  const { jobs, internships, student } = useSelector(
    (state) => state.studentReducer
  );
  const dispatch = useDispatch();

  const ApplyJobHandler = (id) => {
    dispatch(asyncapplyjobstudent(id));
  };
  const ApplyInternshipHandler = (id) => {
    dispatch(asyncapplyinternshipstudent(id));
  };
  useEffect(() => {}, [student]);

  return (
    <div className="container mt-5">
      <h2 className="mb-1">
        {student && "Hello, " + student.firstname + "! 👌"}
      </h2>
      <h3 className="mt-3 mb-5">
        Explore Interships | Jobs Personalised For You
      </h3>
      {/* <ul className="list-group">
        {jobs &&
          jobs.map((j) => (
            <div className="list-group-item mb-3" key={j._id}>
              {JSON.stringify(j)} <br />
              <br />
              {!j.students.includes(student && student._id) ? (
                <button onClick={() => ApplyJobHandler(j._id)}>
                  Apply Job
                </button>
              ) : (
                <h3>Already Applied</h3>
              )}
            </div>
          ))}
      </ul> */}

      {jobs && (
        <div id="allJobsToBeAppliend" className="">
          {jobs &&
            (jobs.length != 0
              ? jobs.map((elem, index) => (
                  <div className="card" key={elem._id}>
                    <h5 className="card-header">Jobs</h5>
                    <div className="card-body">
                      <h5 className="card-title">{elem.title}</h5>
                      <p className="card-text">
                        Skills: {elem.skill}, JobType: {elem.jobtype}
                      </p>
                      <p className="card-text"></p>
                      <Link
                        href={"/student/auth/detailInternship/" + `${elem._id}`}
                        className="btn btn-primary"
                      >
                        View Details{" "}
                      </Link>
                    </div>
                  </div>
                ))
              : "no internships")}
        </div>
      )}

      <hr />

      <h2>
        {student && "Available internships for, " + student.firstname + "!"}
      </h2>
      {/* <ul className="list-group">
        {internships &&
          internships.map((intern) => (
            <div className="list-group-item mb-3" key={intern._id}>
              {JSON.stringify(intern)} <br />
              <br />
              {!intern.students.includes(student && student._id) ? (
                <button onClick={() => ApplyInternshipHandler(intern._id)}>
                  Apply Internship
                </button>
              ) : (
                <h3>Already Applied</h3>
              )}
            </div>
          ))}
      </ul> */}

      {internships && (
        <div id="allInternshipToBeAppliend" className="">
          {internships &&
            (internships.length != 0
              ? internships.map((elem, index) => (
                  <div className="card" key={elem._id}>
                    <h5 className="card-header">Internship</h5>
                    <div className="card-body">
                      <h5 className="card-title">{elem.title}</h5>
                      <p className="card-text">
                        Skills: {elem.skills}, Duration: {elem.duration}
                      </p>
                      <p className="card-text"></p>
                      <Link
                        href={"/student/auth/detailInternship/" + `${elem._id}`}
                        className="btn btn-primary"
                      >
                        View Details{" "}
                      </Link>
                    </div>
                  </div>
                ))
              : "no internships")}
        </div>
      )}
    </div>
  );
};

export default page;
