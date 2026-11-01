import './App.css'
import { useState } from "react";

function App() {

   const [show, setShow] = useState(false);
  // const declares the function; it runs when the button is clicked
  const handlechange = (message) => {
    alert("Hello Welcome to Learning")
  }

   const handleChange = (e) => {
    const text = e.target.value;
    console.log("You typed:" +text);

  };

  return (
    <div className='container'>
      <h1>Hello Folks....!🙋‍♂️👋</h1>

      {/* onClick={handlechange} passes the function, it is not called here */}
      <button type='button' onClick={handlechange}>Click</button>

       <input
        type="text"
        onChange={handleChange}
        placeholder="Type something..."
      />

     
    </div>
  );
}
    

export default App