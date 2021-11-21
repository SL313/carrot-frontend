import { useState } from "react";
// import Counter from "./Counter";
// import Adder from "./Adder";
// import WelcomeName from "./WelcomeName";
// import ConditionalText from "./ConditionalText";
// import HiddenName from "./HiddenName";
import Button from "./Button";
import Test from "./pages/Test";

const App = () => {
  // const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
  //   console.log(event.key);
  //   if (event.key === "h") {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  // };
  const [latestName, setLatestName] = useState("");
  const updateLatestName = (name: string) => {
    setLatestName(name);
  };

  return (
    <>
      {/* <input type="text" onKeyDown={preventKeyDown} />
      <Counter defaultCount={10} />
      <Adder />
      <WelcomeName />
      <ConditionalText />
      <HiddenName /> */}
      <Button name="hello" callback={updateLatestName} />
      <Button name="world" callback={updateLatestName} />
      <Button name="nextop" callback={updateLatestName} />
      <article>{latestName} is clicked!</article>

      <Test />
    </>
  );
};

export default App;
