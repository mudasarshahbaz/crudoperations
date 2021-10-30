import { ADD_USER_INTO_LIST, EDIT_SELECTED_USER, REMOVE_USER_FROM_LIST } from '../types';
import { Alert, Linking, Platform } from 'react-native';
import { LOCAL_STORAGE_KEYS, storeLocalData } from '../../lib/utils/localstorage';

const addUser = (userdata) => {
    return (dispatch, store) => {
        let users = store().stateReducer.users
        users.push(userdata);
        dispatch({ type: ADD_USER_INTO_LIST, payload: users })
    }
}

const removeUser = (userIndex) => {
    return (dispatch, store) => {
        let users = store().stateReducer.users
        users = users.filter((item, index) => index != userIndex);
        console.log("Iser is removed : ", users)
        dispatch({ type: REMOVE_USER_FROM_LIST, payload: users })
    }
}

const updateUser = (userIndex, userData) => {
    return (dispatch, store) => {
        let users = store().stateReducer.users
        users[userIndex] = { ...users[userIndex], first_name: userData.first_name, last_name: userData.last_name };
        dispatch({ type: EDIT_SELECTED_USER, payload: users })
    }
}

export const stateActions = {
    addUser,
    removeUser,
    updateUser
};