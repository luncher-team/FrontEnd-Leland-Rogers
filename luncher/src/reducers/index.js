

const initialState = {
    schoolFetch: false,
    schoolsFetched: false,
    schoolsFetchFail: false,
    donationFetch: false,
    addDonation: false,
    donationAdded: false,
    error: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default rootReducer;