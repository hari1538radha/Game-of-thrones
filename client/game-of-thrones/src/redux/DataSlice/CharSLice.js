import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCharData = createAsyncThunk("Getdata", async (page) => {
  console.log(page);
  return fetch(`http://localhost:5000/allcharacter?page=${page}&limit=10`).then(
    (response) => response.json()
  );
});

export const CharSlice = createSlice({
  name: "data",
  initialState: {
    datas: [],
    loading: false,
  },
  extraReducers: {
    [getCharData.pending]: (state, action) => {
      state.loading = true;
    },
    [getCharData.fulfilled]: (state, action) => {
      state.loading = false;
      state.datas = action.payload.data;
    },
    [getCharData.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default CharSlice.reducer;
