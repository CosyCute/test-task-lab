import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Notification, NotificationState } from '../types/INotification'

const initialState: NotificationState = {
    notifications: []
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotifications(state, action: PayloadAction<Notification[]>) {
            state.notifications = action.payload
        },
        addNotification(state, action: PayloadAction<Notification>) {
            state.notifications.push(action.payload)
        },
        removeNotification(state, action: PayloadAction<number>) {
            state.notifications = state.notifications.filter(notification => notification.id !== action.payload)
        }
    },
})

export default notificationSlice.reducer