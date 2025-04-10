import React from "react";

const Contact = ({ item, deleteContact }) => {
  return (
    <li>
      <div>
        <p>{item.name}</p>
        <p>{item.number}</p>
      </div>
      <button
        onClick={() => {
          console.log(item.id);
          deleteContact(item.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
