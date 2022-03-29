import React,{useState} from "react";
import './App.css';

function SeeCategory({getCategory}) {
    const [categoryInput, setCategoryInput] = useState("");
    const handleSubmit = e=>{
      e.preventDefault();
      getCategory(categoryInput);
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <select id='see-category-input'
            required
            onChange={(e)=> setCategoryInput(e.target.value)}
          >
            <option value="" >Choose Category</option>
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
          <button id='category-button'>Get category</button>
        </form>
      </div>
    );
  }

export default SeeCategory;