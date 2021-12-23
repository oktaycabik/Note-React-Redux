import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    note: [
      {
        content: "note 1 content",
        color: "red",
      },
    ],
  },
  reducers: {
    addNewNote: (state, data) => {
      state.note.push(data.payload);
    },
    
  },

});

export default noteSlice.reducer;
export const { addNewNote } = noteSlice.actions;
export const { filterNote } = noteSlice.actions;