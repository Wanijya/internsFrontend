import axios from "@/utils/axios";
import {
  addstudent,
  addjobs,
  addinternships,
  removestudent,
  iserror,
  removeerror,
} from "../Reducers/studentReducer";
import { toast } from "react-toastify";

export const asynccurrentstudent = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
    dispatch(addstudent(data.student));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignupstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signup", student);
    asynccurrentstudent();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsigninstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signin", student);
    asynccurrentstudent();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignoutstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/student/signout");
    dispatch(removestudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncUpdateStudent = (student) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/update/" + _id, student);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncavatarStudent = (avatar) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/avatar/" + _id, avatar);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncresetpasswordStudent =
  (password) => async (dispatch, getState) => {
    try {
      const { _id } = getState().studentReducer.student;
      const { data } = await axios.post(
        "/student/reset-password/" + _id,
        password
      );
      toast.success(data.msg);
      dispatch(asynccurrentstudent());
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncforgetpasswordStudent =
  (email) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/student/send-mail/", email);
      dispatch(asynccurrentstudent());
    } catch (error) {
      // toast.error(error.response.data.message);
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncotppasswordStudent = (pwd) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/forget-link/", pwd);
    toast.success(data.msg);
    dispatch(asynccurrentstudent());
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncalljobs = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/alljobs/");
    dispatch(addjobs(data.jobs));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncallinternships = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/allinternships");
    dispatch(addinternships(data.internships));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncapplyjobstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/apply/job/" + id);
    dispatch(asynccurrentstudent());
    dispatch(asyncalljobs());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncapplyinternshipstudent =
  (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/student/apply/internship/" + id);
      dispatch(asynccurrentstudent());
      dispatch(asyncallinternships());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };
