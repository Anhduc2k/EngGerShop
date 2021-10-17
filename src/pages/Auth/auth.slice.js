import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from '../../api/auth.api'
import { payloadCreator } from '../../components/utils/helper'
import LocalStorage from '../../constants/localStorage'

export const register = createAsyncThunk(
  'auth/register',
  payloadCreator(authApi.register)
)
export const login = createAsyncThunk(
  'auth/login',
  payloadCreator(authApi.login)
)
export const logout = createAsyncThunk(
  'auth/logout',
  payloadCreator(authApi.logout)
)
const handleAuthFulfilled = (state, action) => {
  const { user, access_token } = action.payload.data
  state.profile = user
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
  localStorage.setItem(LocalStorage.accessToken, access_token)
}
const auth = createSlice({
  name: 'auth',
  initialState: { profile: localStorage.getItem(LocalStorage.user) || {} }, //neu f5 page thi check xem user da co hay chua, neu co thi cap nhat
  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
    [login.fulfilled]: handleAuthFulfilled,
    [logout.fulfilled]: state => {
      state.profile = {}
      localStorage.removeItem(LocalStorage.user)
      localStorage.removeItem(LocalStorage.accessToken)
    }
  }
})

const authReducer = auth.reducer
export default authReducer
