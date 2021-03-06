
const initialState = {
    postQuery: {
        "request": {
            "passengers": {
                "adultCount": 1,
            },
            "slice": [
                {
                    "origin": 'SLC',
                    "destination": 'LAX',
                    "date": '2017-09-01',
                    "maxStops": 1
                }
            ],
            "solutions": 30
        }
    },
    queryReady: {
        confirm: false
    },
    queryResults: []
}

const NEW_SEARCH = 'NEW_SEARCH';
const SEARCH_READY = 'SEARCH_READY';
const SEARCH_RETURN = 'SEARCH_RETURN';


export function postSearch(parameters) {
    // console.log(parameters)
    return {
        type: NEW_SEARCH,
        payload: parameters
    }
}

export function postReady(confirm) {
    // console.log(confirm)
    return {
        type: SEARCH_READY,
        payload: confirm
    }
}

export function searchReturn(results) {
    console.log(results)
    return {
        type: SEARCH_RETURN,
        payload: results
    }
}

export function reducer(state=initialState, action) {
    switch (action.type) {
        case NEW_SEARCH:
            return Object.assign(
                {},
                state,
                {postQuery: action.payload}
            )
        case SEARCH_READY:
            return Object.assign(
                {},
                state,
                {queryReady: action.payload}
            )
        case SEARCH_RETURN:
            return Object.assign(
                {},
                state,
                {queryResults: [...action.payload]}
            )
        default:
            return state;
    }
}