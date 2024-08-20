import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { selectProducts, updateProduct, deleteProduct } from "../redux/productsSlice";
import EditableField from "./EditableField";

const ProductsTab = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleProductUpdate = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
  };

  return (
    <div className="ProductsTab">
      <h3>Products</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <EditableField
                  value={product.name}
                  onChange={(e) =>
                    handleProductUpdate({ ...product, name: e.target.value })
                  }
                />
              </td>
              <td>
                <EditableField
                  value={product.description}
                  onChange={(e) =>
                    handleProductUpdate({ ...product, description: e.target.value })
                  }
                />
              </td>
              <td>
                <EditableField
                  value={product.price}
                  type="number"
                  onChange={(e) =>
                    handleProductUpdate({ ...product, price: e.target.value })
                  }
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => dispatch(deleteProduct(product.id))}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsTab;
