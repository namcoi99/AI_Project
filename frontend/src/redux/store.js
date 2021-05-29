import { configureStore } from '@reduxjs/toolkit'
import criteriaReducer from '../features/criteria/criteriaSlice'
import evaluationItemsReducer from '../features/evaluationItems/evaluationItemsSlice'

export default configureStore({
    reducer: {
        criteria: criteriaReducer,
        evaluationItems: evaluationItemsReducer
    }
})