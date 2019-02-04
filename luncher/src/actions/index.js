import Axios from "axios";
import mockData from '../mockSchoolData.json';

export const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
export const SCHOOLS_FETCHED = 'SCHOOLS_FETCHED';

export const fetchSchools = () => dispatch => {
    dispatch({ type: FETCH_SCHOOLS });
    Axios
        .get({mockData})
        .then(res => dispatch({ type: SCHOOLS_FETCHED, payload: res.data }))
        .catch(err => console.log('error'))
}