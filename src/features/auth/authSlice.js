// import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BaseUrl } from '../../utils/baseUrl';

const UserApi = `${BaseUrl}/api/v1/login`;

export const userLogin = createAsyncThunk('user/userLogin', async (data, stateData) => {
  console.log('data is : ', data);
  console.log('state is : ', stateData.getState);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  const resData = await fetch(UserApi, requestOptions).then((data) => data.json());
  const res = {
    user: resData.result,
    token: '215464rq4jklajdf039230jj9sfjsdf',
  };
  console.log('res is : ', res);
  return res;
});

const localData = JSON.parse(localStorage.getItem('userData'));

let initialState;

if (localData) {
    initialState = localData
}else{
    initialState = {
        user: null,
        token: null,
        loading: false,
      };
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.token = accessToken;
      state.user = user;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("userData")
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      localStorage.setItem('userData', JSON.stringify({ user: payload.user, token: payload.token }));
    },
    [userLogin.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
