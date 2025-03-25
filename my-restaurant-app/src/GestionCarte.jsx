import { DeleteOutlined, EditOutlined, SwapOutlined } from "@ant-design/icons";
import { Form as AntdForm, Button, Modal, Table } from "antd";
import { Formik } from "formik";
import { Form, Input, InputNumber } from "formik-antd";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { CarteContext } from "./contexts";

const GestionCarte = () => {
  let [carte, setCarte] = useContext(CarteContext);
  let [loading, setLoading] = useState(true);
  let [selectedItem, setSelectedItem] = useState(null);
  let [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    return () => {};
  }, []);

  const remove = (item) => {
    setCarte(carte.filter((e) => e !== item));
    setSelectedItem(null);
  };

  const toggleVisibility = (item) => {
    item.visible = !item.visible;
    setCarte([...carte]);
  };

  const handleSubmit = (newValues) => {
    Object.assign(selectedItem, newValues);
    setModalOpened(false);
    setCarte([...carte]);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "trop petit")
      .max(50, "trop long!")
      .required("Ce champ est obligatoire"),
    category: Yup.string()
      .min(2, "trop petit")
      .max(50, "trop long!")
      .required("Ce champ est obligatoire"),
    price: Yup.number().min(0).required("Ce champ est obligatoire"),
  });

  return (
    <>
      {selectedItem ? (
        <div style={{ marginBottom: 24 }}>
          <Button style={{ marginRight: 10 }} onClick={() => setModalOpened(true)}>
            <EditOutlined />
            <span>Edit</span>
          </Button>
          <Button style={{ marginRight: 10 }} onClick={() => remove(selectedItem)}>
            <DeleteOutlined />
            <span>Remove</span>
          </Button>
          <Button style={{ marginRight: 10 }} onClick={() => toggleVisibility(selectedItem)}>
            <SwapOutlined />
            <span>Visible</span>
          </Button>
        </div>
      ) : null}
      <Table
        bordered={true}
        dataSource={carte}
        rowKey={"title"}
        loading={loading}
        expandable={true}
        rowSelection={{
          type: "radio",
          onSelect: (item) => setSelectedItem(item),
        }}
        columns={[
          { title: "category", sorter: true, dataIndex: "category" },
          { title: "title", sorter: true, dataIndex: "title" },
          { title: "price", sorter: true, dataIndex: "price" },
        ]}></Table>

      <Modal open={modalOpened} closable={false} footer={null}>
        <Formik
          enableReinitialize
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={{
            title: selectedItem?.title,
            category: selectedItem?.category,
            price: selectedItem?.price,
          }}>
          {({ errors, touched }) => (
            <Form>
              <AntdForm.Item label="Title">
                <Input name="title" placeholder="Title" />
                {errors.title && touched.title ? <div>{errors.title}</div> : null}
              </AntdForm.Item>

              <AntdForm.Item label="Category">
                <Input name="category" placeholder="Category" />
                {errors.category && touched.category ? <div>{errors.category}</div> : null}
              </AntdForm.Item>

              <AntdForm.Item label="Price">
                <InputNumber name="price" min={0} />
                {errors.price && touched.price ? <div>{errors.price}</div> : null}
              </AntdForm.Item>

              <Button htmlType="button" onClick={() => setModalOpened(false)}>
                Cancel
              </Button>

              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default GestionCarte;
