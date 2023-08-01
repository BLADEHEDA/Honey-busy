// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Add your reducers here if you have multiple reducers
  },
});

export default store;
