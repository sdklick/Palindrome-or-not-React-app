import { useState } from "react";
import "./App.css";

const App = () => {

  const [data, setdata] = useState();
  const [alldata,setalldata]=useState()

  const send = () => {

    //write a program to check palindrome or not

    let userinput = data

    let value1 = userinput.split("");

    let value2 = value1.reverse();

    let value3 = value2.join("");

    if (userinput == value3) {
      setalldata(`${userinput} is a palindrome`);
    } else {
      setalldata(`${userinput} is not a palindrome`);
    }
  };

  return (
    <>
      <div className="fdata">
        <h3>React App to check palindrome or not</h3>
        <input
          onChange={(v) => {
            setdata(v.target.value);
          }}
          placeholder="enter something"
          type="text"
        ></input>
        <button onClick={send}>Submit</button>
        <h5>{alldata}</h5>
      </div>
    </>
  );
};

export default App;
