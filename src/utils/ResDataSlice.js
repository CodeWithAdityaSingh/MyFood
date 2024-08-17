import { createSlice } from "@reduxjs/toolkit";

let ResDataSlice = createSlice({
  name: "resData",
  initialState: {
    resInfo: null,
    filterResInfo: null,
    resID: null,
  },

  reducers: {
    addResInfo: (state, action) => {
      state.resInfo = action.payload;
    },

    addFilterinfo: (state, action) => {
      state.filterResInfo = action.payload;
    },

    addResId: (state, action) => {
      state.resID = action.payload;
    },
  },
});

export const { addResInfo, addFilterinfo, addResId } = ResDataSlice.actions;

export default ResDataSlice.reducer;
