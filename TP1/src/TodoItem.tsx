import { ChangeEvent } from "react";

export default function TodoItem({
  name,
  checked,
  toggleHandler,
}: {
  name: string;
  checked: boolean;
  toggleHandler: (name: string, checked: boolean) => void;
}) {
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) => toggleHandler(name, e.target.checked)}
      />{" "}
      {name}
    </>
  );
}
