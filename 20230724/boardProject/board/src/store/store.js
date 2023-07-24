import { configureStore } from "@reduxjs/toolkit";
import { loginSlice, signUpSlice, dupChkSlice } from "../features/userSlice";

export const store = configureStore({
    reducer : {
        login : loginSlice.reducer,
        signup : signUpSlice.reducer,
        dupchk : dupChkSlice.reducer
    }
})