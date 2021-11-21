type TextType = {
  text: string;
  type: string;
};

const Text = (t: TextType) => {
  const { text, type } = t;
  return (
    <>
      {type === "header" && <h1>{text}</h1>}
      {type === "bold" && <strong>{text}</strong>}
    </>
  );
};

export default Text;
