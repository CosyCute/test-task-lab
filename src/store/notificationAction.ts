import axios from 'axios'
import { API_KEY } from './../config/api';
import { notificationSlice } from './notificationSlice';

export const getNotifications = () => async (dispatch: any) => {
    try {
        await axios.get(`${API_KEY}/notifications`)
            .then(res => dispatch(notificationSlice.actions.setNotifications(res.data)))
    }
    catch (e) {
        console.log(e)
    }
}
export const addNotification = (notification: Notification) => async (dispatch: any) => {
    try {
        await axios.post(`${API_KEY}/notifications`, notification)
            .then(res => dispatch(notificationSlice.actions.addNotification(res.data)))
    }
    catch (e) {
        console.log(e)
    }
}
export const removeNotification = (id: number) => async (dispatch: any) => {
    try {
        await axios.delete(`${API_KEY}/notifications/${id}`)
            .then(() => dispatch(notificationSlice.actions.removeNotification(id)))
    }
    catch (e) {
        console.log(e)
    }
}
export const addTable = (table: any) => async (dispatch: any) => {
    try {
        await axios.post(`${API_KEY}/table`, table)
    }
    catch (e) {
        console.log(e)
    }
}