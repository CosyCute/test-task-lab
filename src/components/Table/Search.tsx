import React from 'react';

import classes from './Search.module.scss'

interface SearchProps {
    searchPlaceholder: string;
    setSearchPlaceholder: Function;
}

const Search = ({ searchPlaceholder, setSearchPlaceholder }: SearchProps) => {
    return (
        <div className={classes.container}>
            <input placeholder='Search...' value={searchPlaceholder} onChange={(e) => setSearchPlaceholder(e.target.value)}/>
        </div>
    );
};

export default Search;