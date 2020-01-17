import Axios from "axios";

export const FETCH_SCHOOLS = "FETCH_SCHOOLS";
export const SCHOOLS_FETCHED = "SCHOOLS_FETCHED";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SCHOOL = "ADD_SCHOOL";
export const SCHOOL_ADDED = "SCHOOL_ADDED";
export const EDIT_SCHOOL = "EDIT_SCHOOL";
export const EDIT_FAIL = "EDIT_FAIL";
export const EDIT_COMPLETE = "EDIT_COMPLETE";
export const GIVE_DONATION = "GIVE_DONATION";
export const DONATION_SUCCESS = "DONATION_SUCCESS";
export const DONATION_FAIL = "DONATION_FAIL";
export const LOGGING_IN = "LOGGING_IN";
export const LOGGED_IN = "LOGGED_IN";
export const FETCHING_USER = "FETCHING_USER";
export const FETCHED_USER = "FETCHED_USER";
export const GET_SCHOOL = "GET_SCHOOL";
export const GOT_SCHOOL = "GOT_SCHOOL";
export const REMOVE_SCHOOL = "REMOVE_SCHOOL";
export const SCHOOL_REMOVED = "SCHOOL_REMOVED";

export const fetchSchools = () => dispatch => {
  dispatch({ type: FETCH_SCHOOLS });
  Axios.get("https://luncher-app-backend.herokuapp.com/schools/")
    .then(res => dispatch({ type: SCHOOLS_FETCHED, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAIL, payload: err.response }));
};

export const addSchool = (school, requestOptions) => dispatch => {
  dispatch({ type: ADD_SCHOOL });
  Axios.post(`https://luncher-app-backend.herokuapp.com/schools/`, school, {
    headers: requestOptions
  })
    .then(res => {
      dispatch({ type: SCHOOL_ADDED, payload: res.data });
      window.location.href = "/admin";
    })
    .catch(err => console.log(err));
};

export const editSchool = (school, requestOptions) => dispatch => {
  dispatch({ type: EDIT_SCHOOL });
  Axios.put(
    `https://luncher-app-backend.herokuapp.com/schools/${school.id}`,
    {
      name: school.name,
      description: school.description,
      address: school.address,
      requested_funds: school.requested_funds
    },
    { headers: requestOptions }
  )
    .then(res => dispatch({ type: EDIT_COMPLETE, payload: res.data }))
    .catch(err => dispatch({ type: EDIT_FAIL, payload: err.response }));
};

export const giveDonation = (donationTtl, id, requestOptions) => dispatch => {
  dispatch({ type: GIVE_DONATION });
  Axios.put(
    `https://luncher-app-backend.herokuapp.com/schools/${id}`,
    {
      donated: donationTtl
    },
    { headers: requestOptions }
  )
    .then(res => {
      dispatch({ type: DONATION_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: DONATION_FAIL, payload: err.response }));
};

export const login = loginInfo => dispatch => {
  dispatch({ type: LOGGING_IN });
  Axios.post(`https://luncher-app-backend.herokuapp.com/api/login/`, loginInfo)
    .then(res => {
      localStorage.setItem("jwt", res.data.token);
      dispatch({ type: LOGGED_IN, payload: res.data });
    })
    .catch(err => console.error(err));
};

export const fetchUser = id => dispatch => {
  dispatch({ type: FETCHING_USER });
  Axios.get(`/${id}`)
    .then(res => {
      dispatch({ type: FETCHED_USER, payload: res.data });
    })
    .catch(err => console.error(err));
};

export const getSchool = schoolID => dispatch => {
  dispatch({ type: GET_SCHOOL });
  Axios.get(`https://luncher-app-backend.herokuapp.com/schools/${schoolID}`)
    .then(res => dispatch({ type: GOT_SCHOOL, payload: res.data }))
    .catch(err => console.log("error"));
};

export const removeSchool = (schoolID, requestOptions) => dispatch => {
  dispatch({ type: REMOVE_SCHOOL });
  Axios.delete(
    `https://luncher-app-backend.herokuapp.com/schools/${schoolID}`,
    {
      headers: requestOptions
    }
  )
    .then(res => dispatch({ type: SCHOOL_REMOVED, payload: res.data }))
    .catch(err => console.log(err));
};
