import { useState, ChangeEvent } from "react";

const Adder = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const updateNumber1 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setNum1(newNumber);
  };

  const updateNumber2 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setNum2(newNumber);
  };

  const calculated = num1 + num2;

  return (
    <section>
      <article>계산 결과: {calculated}</article>
      <section>
        <input type="text" onChange={updateNumber1} />
        +
        <input type="text" onChange={updateNumber2} />
      </section>
      <section></section>
    </section>
  );
};

export default Adder;
