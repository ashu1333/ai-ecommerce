import React from "react";
import formatCurrency from "../utils/Currencyformat";
import Modal from "react-modal";

const Productmodal = ({ item, open, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        style={{
          overlay: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          },
          content: {
            margin: "10px",
            padding: "0",
            inset: "auto",
            boxShadow:
              "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <section></section>
      </Modal>
    </>
  );
};

export default Productmodal;
