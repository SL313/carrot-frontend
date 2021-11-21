import { useState, ChangeEvent } from "react";

const ConditionalText = () => {
  const [name, setName] = useState("");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    setName(newName);
  };

  return (
    <section>
      <input type="text" onChange={onChange} />
      <>{name.length > 5 && <p>반갑습니다 {name}님</p>}</>
    </section>
  );
};

export default ConditionalText;
