import { combineReducers, configureStore } from '@reduxjs/toolkit'

import notificationSlice from './notificationSlice'
import tableSlice from './tableSlice';

const rootReducer = combineReducers({
    notification: notificationSlice,
	table: tableSlice,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
