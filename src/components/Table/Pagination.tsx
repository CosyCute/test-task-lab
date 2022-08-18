import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import classes from './Pagination.module.scss'
import { TableItem } from './../../types/ITable';

interface PaginationProps{
    setCurrentPage: Function;
    localeTable: TableItem[];
    currentPage: number;
}

const Pagination = ({localeTable, setCurrentPage, currentPage}: PaginationProps) => {

    const disableLeftButton = currentPage === 0
    const disableRightButton = localeTable.length / ((currentPage + 1) * 15) < 1

    return (
        <div className={classes.container}>
            <button disabled={disableLeftButton} onClick={() => setCurrentPage((page: number) => page - 1)}><MdKeyboardArrowLeft /></button>
            <button disabled={disableRightButton} onClick={() => setCurrentPage((page: number) => page + 1)}><MdKeyboardArrowRight /></button>
        </div>
    );
};

export default Pagination;