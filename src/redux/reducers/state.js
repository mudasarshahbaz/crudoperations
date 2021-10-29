import {
    ADD_USER_INTO_LIST,
    GET_USER_LIST,
    REMOVE_USER_FROM_LIST,
    EDIT_SELECTED_USER,
} from '../types';

const initialState = {
    users: [],
    repositoryList: []
};

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_INTO_LIST:
            return {
                ...state,
                users: action.payload
            }
        case GET_USER_LIST:
            return {
                ...state,
                users: action.payload
            }
        case REMOVE_USER_FROM_LIST:
            return {
                ...state,
                users: action.payload
            }
        case EDIT_SELECTED_USER:
            return {
                ...state,
                users: action.payload
            }
    

        default:
            return state;
    }
};

export default stateReducer;
