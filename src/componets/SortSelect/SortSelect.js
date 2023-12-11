import React from 'react';

const SortSelect = ({setSort}) => {
    return (
        <select className='sort__select' onChange={(e)=> setSort(e.target.value)}>
            <option className='sort__select-option' value="">Сортировка по цене:</option>
            <option className='sort__select-option' value="big">К большему:</option>
            <option className='sort__select-option' value="small">К меньшему:</option>
        </select>
    );
};

export default SortSelect;