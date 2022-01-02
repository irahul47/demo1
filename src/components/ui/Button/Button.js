const Button = ({ redirect, children }) => {
  return (
    <>
      <a href={redirect}>
        <button className="p-4 bg-black text-white my-4">{children}</button>
      </a>
    </>
  );
};

export default Button;
