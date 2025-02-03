import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      // Optionally, check for duplicates here based on _id if needed:
      const exists = state.pastes.find(item => item._id === paste._id);
      if (exists) {
        toast("Paste already exists!");
      } else {
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("Paste Created Successfully");
      }
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      // Use _id to locate the paste to update
      const index = state.pastes.findIndex(item => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated Successfully");
      }
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All Pastes Reset Successfully");
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex(item => item._id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Removed Successfully");
      }
    },
  },
});

// Export action creators
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions;

// Export reducer as default
export default pasteSlice.reducer;
