import { useState } from "react";
import Output from "./output";

const Greeting = () => {
  const [changedText, setChangedTest] = useState(false);

  const changeTextHandler = () => {
    setChangedTest(true);
  };

  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
