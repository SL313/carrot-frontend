type ButtonType = {
  name: string;
  callback: (name: string) => void;
};

const Button = (props: ButtonType) => {
  const { name, callback } = props;
  return <button onClick={() => callback(name)}>{name}</button>;
};

export default Button;
