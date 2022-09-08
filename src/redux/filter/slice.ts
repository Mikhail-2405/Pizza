import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryId, FilterSliceState, Sort } from './types';



const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: {
    sort: 'Все',
    index: 0,
  },
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<CategoryId>) {
      state.categoryId = action.payload;
    }, 

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    }, 

    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },

    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.categoryId.index = action.payload.categoryId.index;
      state.sort = action.payload.sort;
    }
  }
});

export const { setCategoryId, setSearchValue, setSort, setFilters } = filterSlice.actions;

export default filterSlice.reducer;