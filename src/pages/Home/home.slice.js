import { createAsyncThunk } from '@reduxjs/toolkit'
import categoryApi from '../../api/category.api'
import { payloadCreator } from '../../components/utils/helper'

export const getCategories = createAsyncThunk(
  'home/getCategories',
  payloadCreator(categoryApi.getCategories)
)
