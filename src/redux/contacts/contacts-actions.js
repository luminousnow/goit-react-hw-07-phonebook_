import { createAction } from '@reduxjs/toolkit';

// Update Filter value
export const filterChange = createAction('filter/change', evt => ({
  payload: {
    query: evt,
  },
}));
