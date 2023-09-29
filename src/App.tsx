import "./style/input.css";
import "./App.css";
// components
import { Item } from "./components";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  let apiUrl = "https://fakestoreapi.com/products";

  let [items, setItems]: any = useState([]);
  let data = async () => {
    let arr = await axios.get(apiUrl).then((res) => {
      return res.data;
    });
    setItems([...arr]);
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center mt-20 px-[4rem]">
        <h1 className="text-[4rem] font-semibold mb-10">Fake Store</h1>
        <div className="flex justify-between flex-wrap">
          {items.map((e) => {
            return (
              <Item
                name={e.title}
                price={e.price}
                image={e.image}
                rate={e.rating.rate}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;
