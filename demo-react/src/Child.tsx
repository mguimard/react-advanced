export default function Child({
  name,
  removeHandler,
}: {
  name: string;
  removeHandler: (name: string) => void;
}) {
  console.log("Child");
  return (
    <>
      <p onClick={() => removeHandler(name)}>Child: {name} (click to remove)</p>
    </>
  );
}
