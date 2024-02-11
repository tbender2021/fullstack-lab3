import React, { useState } from "react";
import RecipeChoices from './RecipeChoices'; 
const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });

  const ingredients = {
    'temperature' : ['hot', 'lukewarm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
  };

  const onNewDrink = () => {
    // your code here
  };

  const onCheckAnswer = () => {
    // your code here
  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <form>
      <h3>Temperature</h3>
<div className="answer-space" >
  {inputs["temperature"]} 
</div>

<div className="radio-buttons">
  {choices &&
    choices.map((choice) => (
      <li key={choice}>
        <input
          id={choice}
          value={choice}
          name={label}
          type="radio"
          onChange={handleChange}
          checked={checked == choice}
        />
          {choice}
      </li>
    ))}
</div>


      </form>
      <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>
      <button
        type="button"
        className="button newdrink"
        onClick={onNewDrink}
      >
        New Drink
      </button>
    </div>
  );
};

export default BaristaForm;