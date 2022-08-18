import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TableItem, TableState } from '../types/ITable'

const initialState: TableState = {
    table: []
}

export const tableSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setTable(state, action: PayloadAction<TableItem[]>) {
            state.table = action.payload
        },
    },
})

export default tableSlice.reducer