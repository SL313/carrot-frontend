type photoType = {
  address: string;
  description: string;
};

const Photo = (add: photoType) => {
  const { address, description } = add;
  return (
    <>
      <section>
        <img src={address} />
      </section>
      <article>{description}</article>
    </>
  );
};

export default Photo;
