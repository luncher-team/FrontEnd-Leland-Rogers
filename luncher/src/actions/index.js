import Axios from "axios";

export const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
export const SCHOOLS_FETCHED = 'SCHOOLS_FETCHED';

export const fetchSchools = () => dispatch => {
    dispatch({ type: FETCH_SCHOOLS });
    Axios
        .get('http://localhost.com:3333/schools')
        .then(res => dispatch({ type: SCHOOLS_FETCHED, payload: res.data }))
        .catch(err => console.log('error'))
}