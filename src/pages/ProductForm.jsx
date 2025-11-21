import { useEffect, useState } from "react";
import { createProduct, getProductById, updateProduct } from "../api/products";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getProductById(id).then((res) => setForm(res.data));
    }
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const payload = {
      ...form,
      price: Number(form.price)
    }

    if (id) {
      await updateProduct(id, payload, token);
    } else {
      await createProduct(payload, token);
    }

    navigate("/products");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {id ? "Edit Product" : "New Product"}
      </h1>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mb-3"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Description"
          className="w-full border p-2 mb-3"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 mb-3"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
}
