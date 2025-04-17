import "./App.css";
import { store } from "./redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { randomizeUsers, resetUsers, updateUser } from "./redux/usersSlice";
import { randomizeLEDs, resetLEDs, updateLed } from "./redux/ledsSlice";

function Users() {
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();
  return (
    <>
      <p>Users</p>
      <ul>
        {users.map((user) => (
          <li key={user.ledId}>
            {user.name}
            <select
              value={user.status}
              onChange={(e) => {
                dispatch(updateUser({ status: e.target.value, id: user.ledId }));
              }}>
              <option value="online">online</option>
              <option value="busy">busy</option>
              <option value="absent">absent</option>
              <option value="offline">offline</option>
            </select>
          </li>
        ))}
      </ul>
    </>
  );
}

const colorMap = {
  online: "green",
  absent: "yellow",
  busy: "red",
  offline: "grey",
};

const getLedColor = (status, state) => {
  if (!state) return "black";
  return colorMap[status] || "chucknorris";
};

function Result() {
  const users = useSelector((state) => state.users.list);
  const leds = useSelector((state) => state.leds.list);

  return (
    <>
      <p>Result</p>
      {leds.map((led) => {
        const user = users.find((user) => user.ledId === led.id);
        const backgroundColor = getLedColor(user.status, led.state);

        return <span key={led.id} className="led" style={{ backgroundColor }}></span>;
      })}
    </>
  );
}
function LEDs() {
  const leds = useSelector((state) => state.leds.list);
  const dispatch = useDispatch();
  return (
    <>
      <p>LEDs</p>
      <ul>
        {leds.map((led) => (
          <li key={led.id}>
            {led.id}
            <input
              type="checkbox"
              checked={led.state}
              onChange={(e) => dispatch(updateLed({ id: led.id, state: e.target.checked }))}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

function Menu() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(randomizeUsers())}>Randomize users</button>
      <button onClick={() => dispatch(randomizeLEDs())}>Randomize leds</button>
      <button
        onClick={() => {
          dispatch(resetUsers());
          dispatch(resetLEDs());
        }}>
        Reset all slices
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <Provider store={store}>
        <Menu />
        <hr />
        <Users />
        <hr />
        <Result />
        <hr />
        <LEDs />
      </Provider>
    </>
  );
}

export default App;
