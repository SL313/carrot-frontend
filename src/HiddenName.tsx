// 문자열을 잘라내는 함수 & 문자열을 반복하는 함수
import { useState, ChangeEvent } from "react";

const HiddenName = () => {
  const [name, setName] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newName = event.currentTarget.value;
    if (newName.length > 2) {
      const arr1 = newName.substring(0, 1);
      const arr3 = newName.substring(newName.length - 1, newName.length);
      const arr2 = "*".repeat(newName.length - 2);
      newName = arr1 + arr2 + arr3;
    }
    setName(newName);

    // else {
    //   setName("");
    // }
  };

  return (
    <section>
      <input type="text" onChange={onChange} />
      <>
        <p>반갑습니다 {name}님</p>
      </>
    </section>
  );
};

export default HiddenName;
