function Header(props) {
  return (
    <>
    {/* ternary Conditional redering */}
      {props.myName.name === "Adriana" ? (
        <h1>I am very tired</h1>
      ) : (
        <h1>I am not tired at all</h1>
      )}
      <h1>{props.myName.name}</h1>
      {props.hello()}
      {props.array.map((item) => (
        <h3>{item}</h3>
      ))}
    </>
  );
}

export default Header;
