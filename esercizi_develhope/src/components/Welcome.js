import Age from "./Age";

const Welcome = (props) => {
  return (
    <>
      <p>Welcome, {props.name}</p>
      <Age age={props.age} />
    </>
  );
};

Welcome.defaultProps = {
  name: "You",
  age: 30
  
};

export default Welcome;