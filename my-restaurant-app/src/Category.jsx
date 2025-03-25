import { Card, Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { CarteContext } from "./contexts";
const { Meta } = Card;

const Category = ({ category }) => {
  let [carte] = useContext(CarteContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    return () => {};
  }, []);

  return (
    <Row justify="space-evenly">
      {carte
        .filter((e) => e.visible && e.category === category)
        .map((e, index) => (
          <Col
            key={index}
            xs={{ flex: "100%" }}
            sm={{ flex: "50%" }}
            md={{ flex: "40%" }}
            lg={{ flex: "20%" }}
            xl={{ flex: "10%" }}>
            <Card
              hoverable
              loading={loading}
              style={{ width: 240, marginBottom: 24 }}
              cover={<img alt="example" src={e.image} />}
              title={e.title}
              extra={"$" + e.price}>
              <Meta title="Ingrédients" description={e.ingredients.join(", ")} />
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Category;
