import axios from 'axios';
import { API_KEY } from './../config/api';
import { tableSlice } from './tableSlice';

export const getTable = () => async (dispatch: any) => {
    try {
        await axios.get(`${API_KEY}/table`)
            .then(res => {
                dispatch(tableSlice.actions.setTable(res.data))
            })
    }
    catch (e) {
        console.log(e)
    }
}