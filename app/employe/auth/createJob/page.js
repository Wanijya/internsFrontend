"use client";
import { asyncCreateNewJob } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {}, []);

  const createNewJobHandler = (e) => {
    e.preventDefault();

    const Job = {
      title: e.target.title.value,
      skill: e.target.skill.value,
      jobtype: e.target.jobtype.value,
      openings: e.target.openings.value,
      description: e.target.description.value,
      preferences: e.target.preferences.value,
      salary: e.target.salary.value,
      perks: e.target.perks.value,
      assesments: e.target.assesments.value,
    };
    console.log(Job)

    dispatch(asyncCreateNewJob(Job));
    router.push("/employe/auth/");
  };
  return (
    <div className="container d-flex flex-column gap-3">
      <form
        onSubmit={createNewJobHandler}
        className=" d-flex gap-3 flex-column mb-5 mt-3"
        id="signupform"
      >
        <h3 className="text-center">Create a new Job!</h3>

        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input
            required
            type="text"
            name="title"
            className="form-control"
            id="title"
            placeholder="Job Title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input
            required
            type="text"
            className="form-control"
            id="skill"
            name="skill"
            placeholder="Skills"
          />
        </div>

        <div className="form-group">
          <label htmlFor="openings">Total Openings</label>
          <input
            required
            type="text"
            className="form-control"
            id="openings"
            name="openings"
            placeholder="Total Openings"
          />
        </div>
        <div className="form-group d-flex align-items-center gap-3 ">
          <label htmlFor="">Job Type</label>
          <div className=" d-flex align-items-center justify-content-center">
            <div className="form-check form-check-inline d-flex align-items-center ">
              <input
                className="form-check-input"
                type="radio"
                name="jobtype"
                id="inlineRadio1"
                value="In office"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                In office
              </label>
            </div>
            <div className="form-check form-check-inline d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="jobtype"
                id="inlineRadio2"
                value="Remote"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Remote
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            required
            type="text"
            name="description"
            className="form-control"
            id="description"
            placeholder="Description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="preferences">Preferences</label>
          <input
            required
            type="text"
            name="preferences"
            className="form-control"
            id="preferences"
            placeholder="Preferences"
          />
        </div>

        <div className="form-group">
          <label htmlFor="perks">Perks</label>
          <input
            required
            type="text"
            name="perks"
            className="form-control"
            id="perks"
            placeholder="Perks"
          />
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary Amount</label>
          <input
            required
            type="text"
            name="salary"
            className="form-control"
            id="salary"
            placeholder="Salary Amount"
          />
        </div>

        <div className="form-group">
          <label htmlFor="assesments">Assesments</label>
          <input
            required
            type="text"
            name="assesments"
            className="form-control"
            id="assesments"
            placeholder="Assesments"
          />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
