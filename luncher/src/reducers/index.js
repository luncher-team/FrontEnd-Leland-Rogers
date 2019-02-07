import { FETCH_SCHOOLS,
         SCHOOLS_FETCHED, 
         ADD_SCHOOL, 
         SCHOOL_ADDED, 
         EDIT_SCHOOL, 
         EDIT_COMPLETE, 
         GIVE_DONATION, 
         DONATION_SUCCESS, 
         LOGGED_IN, 
         LOGGING_IN, 
         FETCHING_USER, 
         FETCHED_USER, 
         GET_SCHOOL, 
         GOT_SCHOOL, 
         REMOVE_SCHOOL, 
         SCHOOL_REMOVED, 
         DONATION_FAIL, 
         FETCH_FAIL, 
         EDIT_FAIL} from "../actions";


const initialState = {
    isFetching: false,
    isAdding: false,
    isEditing: false,
    isDonating: false,
    loggingIn: false,
    loggedIn: false,
    fetchingUser: false,
    getSchool: false,
    removeSchool: false,
    error: '',
    schools: [],
    userInfo: [],
    thisSchool: {},
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
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_SCHOOL: 
            return {
                ...state,
                isAdding: true,
                error:''
            }
        case SCHOOL_ADDED:
            return {
                ...state,
                isAdding: false,
                schools: action.payload,
                error: ''
            }
        case EDIT_SCHOOL:
            return {
                ...state,
                isEditing: true,
                error: ''
            }
        case EDIT_FAIL:
            return {
                ...state,
                isEditing: false,
                error: action.payload
            }
        case EDIT_COMPLETE:
            return {
                ...state,
                isEditing: false,
                error: '',
                schools: action.payload
            }
        case GIVE_DONATION:
            return {
                ...state,
                isDonating: true,
                error: ''
            }
        case DONATION_SUCCESS:
            return {
                ...state,
                isDonating: false,
                error: '',
                donated: action.payload
            }
        case DONATION_FAIL:
            return {
                ...state,
                isDonating: false,
                error: action.payload
            }
        case LOGGING_IN:
            return{
                ...state,
                loggingIn: true,
                error:'',                
            }
        case LOGGED_IN:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                loggedInId: action.payload.id
            }
        case FETCHING_USER:
            return {
                ...state,
                fetchingUser: true
            }
        case FETCHED_USER:
            return {
                ...state,
                fetchingUser: false,
                fetchedUser: true,
                userInfo: action.payload
            }
        case GET_SCHOOL:
            return {
                ...state,
                getSchool: true
            }
        case GOT_SCHOOL: 
            return {
                ...state,
                getSchool: false,
                thisSchool: action.payload
            }
        case REMOVE_SCHOOL:
            return {
                ...state,
                removeSchool: true
            }
        case SCHOOL_REMOVED:
            return {
                ...state,
                removeSchool: false,
                schools: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;