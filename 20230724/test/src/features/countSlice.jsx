import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// createSlice 메서드를 사용해서 create 함수를 가지고 있는 객체를 만듦
export const countSlice = createSlice({
  // Slice 구분
  name: "count",

  // 초기값
  initialState: { num: 0 },

  reducers: {
    add: (state) => {
      // 이전 상태가 매개변수로 들어온다.
      state.num += 1;
    },
    remove: (state) => {
      state.num -= 1;
    },
  },
});

// api 따로 없으니까 날씨 api 썼던 것 가져오자
export const temp = createAsyncThunk("/temp", async (name) => {
  // axios
  // npm i axios
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=68f0ac440b9457447e8499236d8da835`
  );
  const { data } = resp;
  console.log(data);
  return data;
});

export const countSlice2 = createSlice({
  // Slice 구분
  name: "count2",

  // 초기값
  initialState: { num: 0, value: "상태" },

  // 동기적인 작업을 처리하고
  reducers: {
    add2: (state) => {
      // 이전 상태가 매개변수로 들어온다.
      state.num += 1;
    },
    remove2: (state) => {
      state.num -= 1;
    },
  },

  // 비동기처리는 여기에 작성하라고 만들어짐
  extraReducers: (builder) => {
    // extraReducers의 builder 매개변수로 받고 케이스를 추가하는데
    // 상태의 케이스 추가 로딩중, 완료, 실패
    // 상태 케이스를 등록해준다.
    // builder.addCase() 케이스 추가

    // 로딩중 케이스
    builder.addCase(temp.pending, (state, action) => {
        // console.log(action)
      state.value = "로딩중";
    });

    // 완료되었을 때 케이스
    builder.addCase(temp.fulfilled, (state, action) => {
      console.log(action)
      state.value = "완료됨";
      state.num += 1;
    });

    // 실패했을때 케이스
    builder.addCase(temp.rejected, (state, action) => {
      state.value = "실패";
    });
  },
});

// 액션 함수를 내보내서 dispatch로 전달해서 액션 발생시킬거임
export const { add, remove } = countSlice.actions;
export const { add2, remove2 } = countSlice2.actions;
