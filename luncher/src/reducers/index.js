import { FETCH_SCHOOLS, SCHOOLS_FETCHED } from "../actions";

const initialState = {
    fetchSchools: false,
    schoolsFetched: false,
    schoolsFetchFail: false,
    donationFetch: false,
    addDonation: false,
    donationAdded: false,
    error: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SCHOOLS:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case SCHOOLS_FETCHED:
            return {
                ...state,
                isFetching: false,
                schools: action.payload,
                error: ''
            }
        default:
            return state;
    }
}

export default rootReducer;