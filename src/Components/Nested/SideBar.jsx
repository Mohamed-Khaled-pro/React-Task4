import React, { useEffect , useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function SideBar() {
  const {name} = useParams()
  const [products , setProducts]= useState([])
  useEffect(()=>{
    async function getData(){
      try{
        const res = await axios.get(`https://dummyjson.com/products/category/${name}`)
        setProducts(res.data.products)
        console.log(products)
      }catch(err){
        console.log(err)
      }
    }
    getData()
  },[name])
  return (
  products ? (
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
  {products.map((e) => (
    <div
      key={e.id}
      className="bg-white rounded-2xl  shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      <Link to={`/${e.id}`}> 
       <img
        src={e.thumbnail}
        alt={e.title}
        className="h-48 w-full cursor-pointer "
      />
      </Link>
     

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-800 mb-2 truncate">
          {e.title}
        </h2>
        <p className="text-gray-600 text-sm flex-grow">{e.description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-[rgb(6,43,250)]">
            ${e.price}
          </span>
          <button className="bg-[rgb(6,43,250)] text-lg text-white px-4 cursor-pointer py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
</section>
       
    ) : (
      <div className="flex justify-center items-center h-screen">
        <span className="loader"></span>
      </div>
    )  
  );
}
