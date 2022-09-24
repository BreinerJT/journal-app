import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        displayName: null,
        email: null,
        errorMessage: null,
        photoURL: null,
        status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
        uid: null,
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.displayName = payload.displayName;
            state.email = payload.email;
            state.errorMessage = null;
            state.photoURL = payload.photoURL;
            state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = payload.uid;
        },
        logout: ( state, { payload } ) => {
            state.displayName = null;
            state.email = null;
            state.errorMessage = payload?.errorMessage;
            state.photoURL = null;
            state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { checkingCredentials, login, logout } = authSlice.actions;