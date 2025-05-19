import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovieList } from '../services/api';

// Constants
const SLICE_NAME = 'movies';

// Initial state
const initialState = {
  lists: {},
  selectedMovie: null,
  loading: false,
  error: null,
};

const handleError = (error) => {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return 'Failed to fetch movie list';
};

// Async thunks
export const fetchMovieList = createAsyncThunk(
  `${SLICE_NAME}/fetchList`,
  async (listId, { rejectWithValue }) => {
    try {
      const response = await getMovieList(listId);
      return response.data;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

// Reducers
const reducers = {
  setSelectedMovie: (state, { payload }) => {
    state.selectedMovie = payload;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearSelectedMovie: (state) => {
    state.selectedMovie = null;
  },
};

// Extra reducers
const extraReducers = (builder) => {
  builder
    // Pending
    .addCase(fetchMovieList.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    // Fulfilled
    .addCase(fetchMovieList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.lists[payload.id] = payload;
    })
    // Rejected
    .addCase(fetchMovieList.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload || 'Failed to fetch movie list';
    });
};

// Create slice
const movieSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
  extraReducers,
});

// Actions
export const { 
  setSelectedMovie, 
  clearError, 
  clearSelectedMovie 
} = movieSlice.actions;

// Selectors
export const selectMovieLists = (state) => state[SLICE_NAME].lists;
export const selectSelectedMovie = (state) => state[SLICE_NAME].selectedMovie;
export const selectLoading = (state) => state[SLICE_NAME].loading;
export const selectError = (state) => state[SLICE_NAME].error;

export default movieSlice.reducer; 