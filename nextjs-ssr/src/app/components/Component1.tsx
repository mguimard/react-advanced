import Component2 from "./Component2";

export default function Component1() {
  console.log("Component1");
  return (
    <>
      <p>Hello Component1</p>
      <Component2 />
    </>
  );
}
