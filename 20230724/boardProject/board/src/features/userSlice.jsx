import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

// 로그인
export const login = createAsyncThunk("/login", async ({user_id, user_pw})=>{
    const {data} = await axios.post("http://localhost:8080/user/login", {user_id, user_pw}, {withCredentials: true});

    console.log(data)
    return data;
})


// 중복확인
export const dupChk = createAsyncThunk("/dupChk", async (user_id)=>{

    const {data} = await axios.post("http://localhost:8080/user/dupChk", {user_id}, {withCredentials: true});
    return data;
})


// 회원가입
export const signUp = createAsyncThunk("/signup", async ({user_id, user_pw})=>{
    const {data} = await axios.post("http://localhost:8080/user/signup", {user_id, user_pw}, {withCredentials: true});

    console.log(data)
    return data;
})


// 로그인
export const loginSlice = createSlice({
    name: "login",

    // 초기값
    initialState : {value: "", user_id : "", result:false},

    extraReducers : (builder) => {

        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.error) {
                state.value = action.payload.error
                state.result = false;
            } else {
                console.log("로그인 성공", action.payload.user_id)
                state.user_id = action.payload.user_id;
                state.result = true;
            }
        })

    }
})


// 중복확인
export const dupChkSlice = createSlice({
    name: "dupChk",

    // 초기값
    initialState : {value: "중복확인 안 함", dup : false},

    extraReducers : (builder) => {
        builder.addCase(dupChk.pending, (state, action)=>{
            state.value  = "중복확인 중"
        });
        builder.addCase(dupChk.fulfilled, (state, action)=>{
            console.log(action);
            if (action.payload.error) {
                state.value  = "사용 불가능한 아이디"
                state.dup = false;
            } else {
                state.value  = "사용 가능한 아이디"
                state.dup = true;
            }
        });
    }
})


// 회원가입
export const signUpSlice = createSlice({
    name: "signUp",

    // 초기값
    initialState : {value: "", result:false},

    extraReducers : (builder) => {
        builder.addCase(signUp.fulfilled, (state, action) => {
            if (action.payload.error) {
                console.log(action.payload.error)
                state.value = action.payload.error
            } else {
                state.result = true;
                console.log("회원가입 성공")
            }
        })
    }
})