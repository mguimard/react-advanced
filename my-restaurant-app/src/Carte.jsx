import { Tabs } from "antd";
import React, { useContext } from "react";
import Category from "./Category";
import { CarteContext } from "./contexts";

const Carte = () => {
  let [carte] = useContext(CarteContext);

  let items = [...new Set(carte.filter((e) => e.visible).map((e) => e.category))].map(
    (c, index) => {
      return {
        key: index,
        label: c,
        children: <Category category={c} />,
      };
    }
  );

  return <Tabs items={items} />;
};

export default Carte;
