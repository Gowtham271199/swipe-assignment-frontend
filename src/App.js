import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import InvoiceList from "./pages/InvoiceList";
import Invoice from "./pages/Invoice";
import ProductList from "./components/ProductList";
import ProductsTab from "./components/ProductsTab"; // Import the ProductsTab component

const App = () => {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <Routes>
          <Route path="/" element={<InvoiceList />} />
          <Route path="/create" element={<Invoice />} />
          <Route path="/create/:id" element={<Invoice />} />
          <Route path="/edit/:id" element={<Invoice />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products-tab" element={<ProductsTab />} /> {/* Add this route */}
        </Routes>
      </Container>
    </div>
  );
};

export default App;
