import useStore from "./store";

export default function Component1() {
  const [count, setCount] = useStore<number>("counter", 0);

  return (
    <>
      <p>Component 1 {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
