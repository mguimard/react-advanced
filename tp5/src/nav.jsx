import { memo } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Nav = memo(({ handlePageChange, setData }) => {
  return (
    <>
      <select onChange={handlePageChange}>
        <option value="home">Home</option>
        <option value="contact">Contact</option>
        <option value="about">About</option>
      </select>
      <button onClick={() => setData("clicked")}>Click me</button>
    </>
  );
});

export const NavV2 = memo(({ handlePageChange }) => {
  return (
    <>
      <Select defaultValue="home" onChange={handlePageChange}>
        <MenuItem value={"home"}>Home</MenuItem>
        <MenuItem value={"contact"}>Contact</MenuItem>
        <MenuItem value={"about"}>About</MenuItem>
      </Select>
    </>
  );
});

export default Nav;
