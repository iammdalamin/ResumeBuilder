import { createSlice } from "@reduxjs/toolkit";
import { getEmail } from "../helpers/SessionHelper";

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
      photo: "",
          graduation: [{
              instituteName: "",
              examName: "",
              start: "",
              end: "",
              department:""
      }],
          experience: [{
            company: "",
            position:"",
              start: "",
              end: "",
              present: false,
              summary:""
      }],
      skills: [],
          languages:[],
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
