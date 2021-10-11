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
const handleAuthFulfilled = (state, action) => {
  state.profile = action.payload.data
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
}
const auth = createSlice({
  name: 'auth',
  initialState: { profile: localStorage.getItem(LocalStorage.user) || {} }, //neu f5 page thi check xem user da co hay chua, neu co thi cap nhat
  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
    [login.fulfilled]: handleAuthFulfilled
  }
})

const authReducer = auth.reducer
export default authReducer
