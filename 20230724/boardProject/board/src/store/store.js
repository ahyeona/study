import { configureStore } from "@reduxjs/toolkit";
import { loginSlice, signUpSlice, dupChkSlice } from "../features/userSlice";
import {deleteSlice, detailSlice,editSlice,listSlice,postSlice} from "../features/boardSlice"

export const store = configureStore({
    reducer : {
        login : loginSlice.reducer,
        signup : signUpSlice.reducer,
        dupchk : dupChkSlice.reducer,
        delete : deleteSlice.reducer,
        detail : detailSlice.reducer,
        edit : editSlice.reducer,
        list : listSlice.reducer,
        post : postSlice.reducer
    }
})