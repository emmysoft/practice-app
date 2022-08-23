import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'username',
    initialState: {
        name:'',
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        }
    }
});

export const { login } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export default userSlice.reducer;