import { createSlice } from '@reduxjs/toolkit';
import criteria from '../../data/criteria.json';

const initialState = criteria

const criteriaSlice = createSlice({
    name: 'criteria',
    initialState,
    reducers: {}
})

export default criteriaSlice.reducer