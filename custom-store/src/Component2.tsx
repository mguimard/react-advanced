import useStore from "./store";

export default function Component2() {
  const [count, setCount] = useStore("counter", 0);

  return (
    <>
      <p>Component 2: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}
