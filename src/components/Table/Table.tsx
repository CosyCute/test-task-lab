import React, { useEffect, useState } from 'react';

import classes from './Table.module.scss'
import { useAppSelector } from '../../hooks/redux';
import { SortKeys, TableItem } from '../../types/ITable';
import Search from './Search';
import Pagination from './Pagination';

const Table = () => {

    const table = useAppSelector(state => state.table.table)

    const [currentSort, setCurrentSort] = useState<SortKeys>('id')
    const [currentSortDirection, setCurrentSortDirection] = useState<'up' | 'down'>('up')
    const [localeTable, setLocaleTable] = useState<TableItem[]>([])
    const [searchPlaceholder, setSearchPlaceholder] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(0)

    useEffect(() => {
        setLocaleTable(table)
    }, [table])

    useEffect(() => {
        let temp = [...table]
        if (currentSort === 'id') {
            temp = (temp.sort((a, b) => currentSortDirection === 'up' ? (a.id - b.id) : (b.id - a.id)))
        }
        else {
            temp = (temp.sort((a, b) =>
                currentSortDirection === 'up'
                    ?
                    a[currentSort].toString().localeCompare(b[currentSort].toString())
                    :
                    b[currentSort].toString().localeCompare(a[currentSort].toString())
            ))
        }
        temp = temp.filter((item: any) => {
            let flag = false
            const keys = Object.keys(item)
            keys.forEach((key) => {
                if (item[key].toString().toLocaleLowerCase().includes(searchPlaceholder.toLocaleLowerCase())) {
                    flag = true
                }
            })
            return flag

        })
        setLocaleTable(temp)
        setCurrentPage(0)
    }, [currentSort, currentSortDirection, searchPlaceholder])

    const handleSelect = (key: SortKeys) => {
        if (currentSort === key) {
            currentSortDirection === 'up'
                ?
                setCurrentSortDirection('down')
                :
                setCurrentSortDirection('up')
        }
        else {
            setCurrentSortDirection('up')
            setCurrentSort(key)
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.buttons}>
                <Search searchPlaceholder={searchPlaceholder} setSearchPlaceholder={setSearchPlaceholder} />
                <Pagination currentPage={currentPage} localeTable={localeTable} setCurrentPage={setCurrentPage}/>
            </div>
            <table cellSpacing="0">
                <tbody>
                    <tr>
                        <th onClick={() => handleSelect('id')}>Id</th>
                        <th onClick={() => handleSelect('name')}>Name</th>
                        <th onClick={() => handleSelect('surname')}>Surname</th>
                        <th onClick={() => handleSelect('email')}>Email</th>
                        <th onClick={() => handleSelect('phone')}>Phone</th>
                        <th onClick={() => handleSelect('city')}>City</th>
                        <th onClick={() => handleSelect('country')}>Country</th>
                    </tr>
                    {localeTable.length > 0 && localeTable.slice(currentPage * 15, (currentPage + 1) * 15).map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.city}</td>
                            <td>{item.country}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;