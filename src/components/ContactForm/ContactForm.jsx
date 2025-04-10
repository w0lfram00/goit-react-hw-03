import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = { name: "", number: "" };
  const handleSubmit = ({ name, number }, actions) => {
    addContact({ name, number });
    actions.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <p>Name</p>
            <Field type="text" name="name" />
          </label>
          <label>
            <p>Number</p>
            <Field type="text" name="number" />
          </label>
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
