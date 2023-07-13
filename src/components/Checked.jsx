import React, { useState } from "react";

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import "./style.css";

function Checked() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ["Apple", "Banana", "Tea", "Coffee"];
  const [data, setData] = useState(checkList);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
      console.log(updatedList)
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
      console.log(updatedList)
    }
    setChecked(updatedList);
    
  };

  let handleDelete = (index)=>{
        let newData = data.filter((elem,ind)=>{
            return index != ind
            
            
        })
        
        setData(newData);
        
         
        
  }

  // Generate string of checked items
//   const checkedItems = checked.length
//     ? checked.reduce((total, item) => {
//         return total + ", " + item;
//       })
//     : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <div className="title">Your CheckList:</div>
        <div className="list-container">
          <ul>
          {data.map((item, index) => (
            <div key={index}>
              <li className="d-flex">
              <input value={item} type="checkbox" onChange={handleCheck} />
              {item}<button className={isChecked(item)}  onClick={()=>handleDelete(index)}>Delete { item }</button>
              </li>
            </div>
          ))}
          </ul>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}
export default Checked;