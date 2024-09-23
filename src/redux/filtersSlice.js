import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "", // начальное значение фильтра
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

// Селектор для отримання значення фільтра
export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;
