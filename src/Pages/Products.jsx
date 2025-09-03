import { useEffect , useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

export default function Products() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get('https://dummyjson.com/products/categories')
        setData(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    data ? (
      <div className="flex justify-center items-center flex-col mt-10  px-10 scrollbar-hide h-full  w-full">
        <h1 className="hover:scale-105 transition-all duration-500 text-white text-4xl font-extrabold font-sans border-b-4 p-2 border-white">
          All Products
        </h1>

        <div className="flex w-full justify-start items-center gap-10 p-4 mt-8 overflow-x-auto ">
         {data.map((e , index)=>(
           <Link
           key={index}
            to={e.slug}
            className="hover:scale-105 text-nowrap  transition-all duration-500 hover:bg-[rgb(6,43,250)] hover:text-white flex justify-center items-center p-3 rounded-2xl mt-10 font-bold cursor-pointer bg-white text-[rgb(6,43,250)]"
          >
            {e.name}
          </Link>
         ))}
        </div>

        <div className="p-10 text-3xl my-10 rounded-3xl w-full h-full ">
          <Outlet />
        </div>
      </div>
    ) : (
      <div className="flex justify-center items-center h-screen">
        <span className="loader"></span>
      </div>
    )
  )
}
