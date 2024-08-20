import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const InvoiceModal = ({ isOpen, closeModal, invoice }) => {
  const {
    invoiceNumber = "N/A",
    billTo = "N/A",
    dueDate = "N/A",
    totalAmount = "N/A",
    taxAmount = "N/A",
    discountAmount = "N/A",
  } = invoice || {};

  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Invoice Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Invoice Number:</strong> {invoiceNumber}
        </p>
        <p>
          <strong>Bill To:</strong> {billTo}
        </p>
        <p>
          <strong>Due Date:</strong> {dueDate}
        </p>
        <p>
          <strong>Total Amount:</strong> {totalAmount}
        </p>
        <p>
          <strong>Tax Amount:</strong> {taxAmount}
        </p>
        <p>
          <strong>Discount Amount:</strong> {discountAmount}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

InvoiceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  invoice: PropTypes.shape({
    invoiceNumber: PropTypes.string,
    billTo: PropTypes.string,
    dueDate: PropTypes.string,
    totalAmount: PropTypes.string,
    taxAmount: PropTypes.string,
    discountAmount: PropTypes.string,
  }),
};

export default InvoiceModal;
