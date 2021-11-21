type Age = {
  age: number;
};

const Adult = (props: Age) => {
  const { age } = props;
  return <span>{age > 20 ? "성인" : "미성년자"}</span>;
};
export default Adult;
