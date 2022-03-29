import React, { useState } from 'react';
import './App.css';

function Item({ item, index }) {

    return (
        <div className='Item'>
            <h3 className='item-category'>{item.category}</h3>
            <p className='item-currency'>{item.currency} kr</p>
            <p className='item-date'>{item.date}</p>
        </div>
    );
}

export default Item;