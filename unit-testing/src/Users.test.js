import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Users from "./Users";

jest.mock("./User", () => () => "mocked User");

describe("Users component test suite", () => {
  it("should render", () => {
    const { container } = render(<Users users={["A", "B"]} />);
    expect(container).toMatchInlineSnapshot(`
    <div>
      <h1>
        User list
      </h1>
      <p>
        Number of users: 
        <span
          data-testid="number-of-users"
        >
          2
        </span>
      </p>
      mocked User
      mocked User
    </div>
    `);
  });

  it("should show 0 users", () => {
    render(<Users users={[]} />);
    const number_of_users = screen.getByTestId("number-of-users");
    expect(number_of_users.textContent).toBe("0");
  });

  it("should show 3 users", () => {
    render(<Users users={["A", "B", "C"]} />);
    const number_of_users = screen.getByTestId("number-of-users");
    expect(number_of_users.textContent).toBe("3");
  });
});

/*
   <div>
    - <h1>User list</h1>
    - <p>
    -   Number of users: <span data-testid="number-of-users">2</span>
    - </p>
    - mocked User
    - mocked User

    +   <h1>
    +     User list
    +   </h1>
    +   <p>
    +     Number of users: 
    +     <span
    +       data-testid="number-of-users"
    +     >
    +       2
    +     </span>
    +   </p>
    +   mocked User
    +   mocked User

*/
