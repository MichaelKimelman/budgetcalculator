import React, { useState } from 'react';
import './App.css';
import ChangeMonth from './ChangeMonth';
import Footer from './Footer';
import Item from './Item';
import ItemForm from './ItemForm';
import SeeCategory from './SeeCategory';


function App() {
  const [items, setItems] = useState([
    /* {
      currency: 100,
      category: "entertainment",
      date: "2022-02-01"
    },
    {
      currency: 300,
      category: "entertainment",
      date: "2022-02-01"
    },
    {
      currency: 50,
      category: "entertainment",
      date: "2022-02-01"
    },
    {
      currency: 90,
      category: "transportation",
      date: "2022-03-01"
    },
    {
      currency: 150,
      category: "housing",
      date: "2022-03-01"
    },
    {
      currency: 1337,
      category: "entertainment",
      date: "2022-05-13"
    },
    {
      currency: 9001,
      category: "entertainment",
      date: "2022-05-23"
    } */
  ]);
  let preMonth = [];
  let total = 0;
  const [month, setMonth] = useState([]);
  const [totalMonth, setTotalMonth] = useState(0);

  const [category, setCategory] = useState([]);
  const [totalCategory, setTotalCategory] = useState(0);
  let preCategory = [];
  let totalcat = 0;


  const getCategory = (category) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].category == category) {
        preCategory.push(items[i]);
        totalcat += Number(items[i].currency);
      }
    }
    setCategory(preCategory);
    setTotalCategory(totalcat);

  }

  const getMonth = (monthInput) => {
    setMonth([]);
    for (let i = 0; i < items.length; i++) {
      let year = new Date(items[i].date).getFullYear().toString();
      let incompletemonth = (new Date(items[i].date).getMonth() + 1);
      let month = (incompletemonth < 10 ? "0" : "") + incompletemonth.toString();
      let date = year + "-" + month;

      if (date == monthInput) {
        preMonth.push(items[i]);
        total += Number(items[i].currency);
      }
    }
    setMonth(preMonth);
    setTotalMonth(total);
  }

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
  }
  return (
    <div className="App">

      <h1>Flow</h1>
      <h2>Welcome to Flow! The number one Budgeting App</h2>

      <div className="container1">
        <ItemForm addItem={addItem} />
        <div id='item-list'>
          {items.map((item, index) => (
            <Item key={index} index={index} item={item} />
          ))}
        </div>
        {/* <SearchForm />
        <Items />  */}
      </div>

      <div className='Totals'>
        <div className='ChangeMonth'>
          <ChangeMonth getMonth={getMonth} />
          {month.map((item, index) => (
            <Item key={index} index={index} item={item} />
          ))}
          <p className='Total-Month'>Total: {totalMonth}</p>
        </div>
        <div className='SeeCategory'>
          <SeeCategory getCategory={getCategory} />
          {category.map((item, index) => (
            <Item key={index} index={index} item={item} />
          ))}
          <p className='Total-Category'>Total: {totalCategory}</p>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
