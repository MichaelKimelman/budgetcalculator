import React, { useState } from 'react';
import './App.css';

function ItemForm({ addItem }) {
    const [money, setMoney] = useState(0);
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { currency: money, category: category, date: date }
        console.log(newItem);
        addItem(newItem);
    }
    return (
        <div className="ItemForm">
            <form id='form' onSubmit={handleSubmit}>
                <input
                    id='amount-input'
                    type="number"
                    placeholder='Amount'
                    onChange={(e) => setMoney(e.target.value)}
                    step="any"
                    required
                ></input>
                <select id='category-input'
                    required
                    onChange={(e) => setCategory(e.target.value)}>

                    <option value="" disabled selected hidden>Choose Category</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Housing">Housing</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Food">Food</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Savings">Savings</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>

                <input
                    id='date'
                    type="date"
                    required
                    min="1000-01-01"
                    max="9999-12-31"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button id='add-button'>+</button>
                {/* {!isPending && <button id='add-button'>+</button>}
          {isPending && <button id='add-button'>+...</button>} */}

            </form>
        </div>
    );

}
export default ItemForm;