import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

// 전체 게시글 가져오기
export const getList = createAsyncThunk("/boardlist", async () => {
    const {data} = await axios.get("http://localhost:8080/board/", {withCredentials: true});
    return data;
})

// 상세 게시글
export const getBoard = createAsyncThunk("/board/detail", async ({id}) => {
    const {data} = await axios.get(`http://localhost:8080/board/detail/${id}`, {withCredentials: true});
    return data;
})

// 게시글 등록
export const postBoard = createAsyncThunk("/board/post", async ({title, content}) => {
    const {data} = await axios.post(`http://localhost:8080/board/post`, {title, content}, {withCredentials: true});
    return data;
})

// 게시글 수정
export const editBoard = createAsyncThunk("/board/edit", async ({id, title, content}) => {
    const {data} = await axios.post(`http://localhost:8080/board/update/${id}`, {title, content}, {withCredentials: true});
    return data;
})

// 게시글 삭제
export const deleteBoard = createAsyncThunk("/board/delete", async ({id}) => {
    const {data} = await axios.get(`http://localhost:8080/board/delete/${id}`, {withCredentials: true});
    return data;
})



// 목록
export const listSlice = createSlice({
    name : "list",
    initialState : {list : []},
    extraReducers : (builder) => {
        builder.addCase(getList.fulfilled, (state, action) => {
            if (!action.payload.error) {
                console.log("list", action.payload)
                state.list = action.payload;
            }
        })
    }
});

// 상세
export const detailSlice = createSlice({
    name:"detail",
    initialState : {board:{}, isWriter : null},
    reducers : {
        detailInit : (state) => {
            state.board= {};
            state.isWriter = null
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getBoard.fulfilled, (state, action) => {
            if (!action.payload.error) {
                console.log("detail", action.payload)
                state.board = action.payload.board;
                state.isWriter = action.payload.writer;
            }
        })
    }
})

// 등록
export const postSlice = createSlice({
    name : "post",
    initialState : {result : null},
    extraReducers : (builder) => {
        builder.addCase(postBoard.fulfilled, (state, action) => {
            if (!action.payload.error) {
                console.log("post", action.payload)
                state.result = true;
            } else {
                state.result = false;
            }
        });
    }
})

// 수정
export const editSlice = createSlice({
    name : "edit",
    initialState : {result: null},
    reducers : {
        editInit : (state) => {
            state.result = null;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(editBoard.fulfilled, (state, action) => {
            if (!action.payload.error) {
                console.log("edit", action.payload)
                state.result = true;
            } else {
                state.result = false;
            }
        })
    }
})


// 삭제
export const deleteSlice = createSlice({
    name : "delete",
    initialState : {result: null},
    extraReducers : (builder) => {
        builder.addCase(deleteBoard.fulfilled, (state, action) => {
            if (!action.payload.error) {
                console.log("delete", action.payload)
                state.result = true;
            } else {
                state.result = false;
            }
        })
    }
})


export const {detailInit} = detailSlice.actions;
export const {editInit} = editSlice.actions;