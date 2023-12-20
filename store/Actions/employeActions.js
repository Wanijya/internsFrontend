import axios from "@/utils/axios";
import {
  addemploye,
  addjobs,
  addinternships,
  removeemploye,
  iserror,
} from "../Reducers/employeReducer";

export const asynccurrentemploye = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/current");
    dispatch(addemploye(data.employe));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignupemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/signup", employe);
    asynccurrentemploye();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsigninemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/signin", employe);
    asynccurrentemploye();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignoutemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/employe/signout");
    dispatch(removeemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncupdateemploye = (employe) => async (dispatch, getState) => {
  try {
    const { _id } = getState().employeReducer.employe;
    const { data } = await axios.post("/employe/update/" + _id, employe);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncavataremploye = (avatar) => async (dispatch, getState) => {
  try {
    const { _id } = getState().employeReducer.employe;
    const { data } = await axios.post("/employe/avatar/" + _id, avatar);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncresetpasswordemploye =
  (password) => async (dispatch, getState) => {
    try {
      const { _id } = getState().employeReducer.employe;
      const { data } = await axios.post(
        "/employe/reset-password/" + _id,
        password
      );
      dispatch(asynccurrentemploye());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncforgetpasswordemploye =
  (email) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/employe/send-mail/", email);
      dispatch(asynccurrentemploye());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncotppasswordemploye = (pwd) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/forget-link/", pwd);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynccreatejobemploye = (job) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/job/create/", job);
    dispatch(asynccurrentemploye());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynccreateinternshipemploye =
  (internship) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "/employe/internship/create/",
        internship
      );
      dispatch(asynccurrentemploye());
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };
