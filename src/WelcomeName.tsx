import { useState, ChangeEvent } from "react";

const WelcomeName = () => {
  const [name, setName] = useState("");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    setName(newName);
  };

  return (
    <section>
      <input type="text" onChange={onChange} />
      <article>반갑습니다 {name}님</article>
    </section>
  );
};

export default WelcomeName;
