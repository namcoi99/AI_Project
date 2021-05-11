import { configureStore } from '@reduxjs/toolkit'
import criteriaReducer from '../features/criteria/criteriaSlice'
import evaluationItemsSlice from '../features/evaluationItems/evaluationItemsSlice'

export default configureStore({
    reducer: {
        criteria: criteriaReducer,
        evaluationItems: evaluationItemsSlice
    }
})