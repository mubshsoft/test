import React, { useState } from 'react';

const CheckBoxList = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckBoxChange = (event) => {
    const { value, checked } = event.target;

    // Check if the checkbox is checked or unchecked
    if (checked) {
      // Add the value to the checkedItems array
      setCheckedItems([...checkedItems, value]);
    } else {
      // Remove the value from the checkedItems array
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  const handleDelete = (item) => {
    setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
  };

  const items = ['one', 'two', 'three', 'four'];

  return (
    <div>
      <h2>Checkbox List</h2>
      <pre>{JSON.stringify(checkedItems)}</pre>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                value={item}
                checked={checkedItems.includes(item)}
                onChange={handleCheckBoxChange}
              />
              {item}
            </label>
            {checkedItems.includes(item) && (
              <button onClick={() => handleDelete(item)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
      <p>Selected Items: {checkedItems.join(', ')}</p>
    </div>
  );
};

export default CheckBoxList;
