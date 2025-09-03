import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-white text-center mt-10">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <section className="flex flex-col md:flex-row gap-10 bg-black/70 text-white p-8 rounded-2xl shadow-lg">
      <div className="flex-1 flex justify-center items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-sm rounded-xl shadow-md"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-300 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-[rgb(6,43,250)] mb-4">
          ${product.price}
        </p>
        <p className="text-sm text-gray-400 mb-4">
          Brand: {product.brand} | Category: {product.category}
        </p>

        <button className="bg-[rgb(6,43,250)] hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition">
          Add to Cart
        </button>
      </div>
    </section>
  );
}
