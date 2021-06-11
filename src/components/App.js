import React, {useState} from "react";
import Todo from "./Todolist";
import Input from "./inputArea";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
		const newValue = event.target.value;
		setInputText(newValue);
	}

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText]
    });
    setInputText("");
  }

  function deleteitem(id){
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input 
        onChange={handleChange} 
        value={inputText} 
        onClick={addItem} 
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <Todo 
              key={index} 
              id={index} 
              text={todoItem} 
              onChecked={deleteitem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
