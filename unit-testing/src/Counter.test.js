import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Users component test suite", () => {
  it("should show 0 as initial value", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toBe("0");
  });

  it("should increment and show the new value", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByTestId("increment"));
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toBe("1");
  });

  it("should decrement and show the new value", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByTestId("decrement"));
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toBe("-1");
  });
});
