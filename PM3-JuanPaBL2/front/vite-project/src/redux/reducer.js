import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userActive: {},
    userAppointments: [],
}

export const reducerSlice = createSlice({
    name: "estado",
    initialState: initialState,
    reducers: {
        saveUserLogin: (state, action) => {
            state.userSave = action.payload;
        },
        saveUserAppointments: (state, action) => {
            state.userAppointments = action.payload;
        }
    }
})

export const {saveUserLogin, saveUserAppointments} = reducerSlice.actions;
