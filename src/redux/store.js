import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './cardSlice'

export const store = configureStore({
    reducer: {
        //Named the Reducer as IframeToggler
        card: cardSlice.reducer
    },
})