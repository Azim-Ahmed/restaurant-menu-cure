import { configureStore } from '@reduxjs/toolkit'
// import { apiSlice } from '../features/api/apiSlice'
// import filtersReducer from '../features/filters/filtersSlice'
import filtersReducer from '../features/filters/fliterSlice'
import  apiSlice  from '../features/api/apiSlice'
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';

// const authMiddleware = (store) => (next) => (action) => {
//   if (authActions.login.match(action)) {
//     // Note: localStorage expects a string
//     localStorage.setItem('isAuthenticated', 'true');
//   } else if (authActions.logout.match(action)) {
//     localStorage.setItem('isAuthenticated', 'false');
//   }
//   return next(action);
// };

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filtersReducer,
    auth: authReducer,
    cart:cartReducer
  },
  middleware: (getDefaultMiddlewares) =>
  {
  return  getDefaultMiddlewares().concat(apiSlice.middleware)
    // getDefaultMiddlewares().concat(apiSlice.authMiddleware)
  }
})