import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    value: {
      firstName: "",
      lastName: "",
      email: "",
      linkedin: "",
      phone: "",
      address: "",
      summary: "",
          graduation: [{
              instituteName: "",
              examName: "",
              passingYear: "",
              department:""
      }],
          experience: [{
              company: "",
              start: "",
              end: "",
              present: false,
              summary:""
      }],
          skills:[],
      nextPermation: false,
      nextClick: false,
      emailValid:false,
      phoneValid:false,
     

    },
  },
  reducers: {
    info: (state, action) => {
      state.value = action.payload;
    }
  },
});
export const { info } = resumeSlice.actions;
export default resumeSlice.reducer;
