import Pad from "./Pad";
import { useState } from "react";

const Calculator = () => {
  const [expression, set] = useState("");
  const inputKey = (key: string) => {
    if (key === "=") {
      set(eval(expression));
    } else {
      set(expression + key);
    }
  };
  return (
    <section>
      <input type="text" value={expression} />
      <section>
        <Pad keyName="7" callback={inputKey} />
        <Pad keyName="8" callback={inputKey} />
        <Pad keyName="9" callback={inputKey} />
      </section>
      <section>
        <Pad keyName="4" callback={inputKey} />
        <Pad keyName="5" callback={inputKey} />
        <Pad keyName="6" callback={inputKey} />
      </section>
      <section>
        <Pad keyName="1" callback={inputKey} />
        <Pad keyName="2" callback={inputKey} />
        <Pad keyName="3" callback={inputKey} />
      </section>
      <section>
        <Pad keyName="0" callback={inputKey} />
      </section>
      <section>
        <Pad keyName="+" callback={inputKey} />
        <Pad keyName="-" callback={inputKey} />
        <Pad keyName="*" callback={inputKey} />
        <Pad keyName="/" callback={inputKey} />
        <Pad keyName="=" callback={inputKey} />
      </section>
    </section>
  );
};

export default Calculator;
