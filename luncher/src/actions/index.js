import Axios from "axios";

export const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
export const SCHOOLS_FETCHED = 'SCHOOLS_FETCHED';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SCHOOL = "ADD_SCHOOL";
export const SCHOOL_ADDED = "SCHOOL_ADDED";
export const EDIT_SCHOOL = "EDIT_SCHOOL";
export const EDIT_COMPLETE = "EDIT_COMPLETE";
export const GIVE_DONATION = "GIVE_DONATION";
export const DONATION_SUCCESS = "DONATION_SUCCESS";
export const DONATION_FAIL = "DONATION_FAIL";
export const LOGGING_IN = "LOGGING_IN";
export const LOGGED_IN = "LOGGED_IN";
export const FETCHING_USER = "FETCHING_USER";
export const FETCHED_USER = "FETCHED_USER";

export const fetchSchools = () => dispatch => {
    dispatch({ type: FETCH_SCHOOLS });
    Axios
        .get('https://luncher-app-backend.herokuapp.com/schools/')
        .then(res => dispatch({ type: SCHOOLS_FETCHED, payload: res.data }))
        .catch(err => console.log('error'))
}

export const addSchool = (school) => dispatch => {
    dispatch({ type: ADD_SCHOOL });
    Axios
        .post(`https://luncher-app-backend.herokuapp.com/schools/`, school)
        .then(res => {
            dispatch({ type: SCHOOL_ADDED, payload: res.data});
        })
        .catch(err => console.log(err));
}

export const editSchool = (school) => dispatch => {
    dispatch({ type: EDIT_SCHOOL });
    Axios
        .put(`https://luncher-app-backend.herokuapp.com/schools/${school.id}`, {
            id: school.id,
            school: school.name,
        })
        .then(res => dispatch({ type: EDIT_COMPLETE, payload: res.data }))
        .catch(err => console.log(err));
}

export const giveDonation = (donationTtl, id, requestOptions) => dispatch => {
    dispatch({ type: GIVE_DONATION });
    Axios
        .put(`https://luncher-app-backend.herokuapp.com/schools/${id}`, {
            donated: donationTtl,
        },  {headers: requestOptions})
        .then(res => {
            dispatch({ type: DONATION_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
        })
}

export const login = (loginInfo) => dispatch => {
    dispatch({type: LOGGING_IN});
    Axios
        .post(`https://luncher-app-backend.herokuapp.com/api/login/`, loginInfo)
        .then(res => {        
            localStorage.setItem('jwt', res.data.token);
            dispatch({type: LOGGED_IN, payload: res.data})
            Axios
                .get(`https://luncher-app-backend.herokuapp.com/api/users/${res.data.id}`)
            .then(res => {
                dispatch({type: FETCHED_USER, payload: res.data})
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));  
    
}