import { createSlice } from '@reduxjs/toolkit';
import evaluationItems from '../../data/attributes.json';

const initialState = evaluationItems

const evaluationItemsSlice = createSlice({
    name: 'evaluationItems',
    initialState,
    reducers: {}
})

export default evaluationItemsSlice.reducer