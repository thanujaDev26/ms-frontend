import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../api/products";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  const load = async () => {
    const res = await getAllProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    const token = localStorage.getItem("token");
    await deleteProduct(id, token);
    load();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link
          to="/products/new"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {products.map((p) => (
          <div key={p._id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{p.name}</h2>
            <p>{p.description}</p>
            <p className="font-semibold">USD {p.price}</p>
            <div className="flex gap-3 mt-3">
              <Link
                to={`/products/${p._id}`}
                className="text-blue-500 underline"
              >
                Edit
              </Link>
              <button
                onClick={() => remove(p._id)}
                className="text-red-500 underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
