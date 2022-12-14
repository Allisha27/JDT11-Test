import React, { useEffect, useState } from "react";
import { Banner, ProductCard } from "@components";
import api from "../../services/api";

const HomePage = () => {
  const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const url = "/api/v1/products";
      const response = await api.get(url);
      const payload = [...response.data.data.products];
      console.log(payload);
      setProducts(payload || []);
    } catch (error) {
      alert(error);
    }
  };

  const fetchCities = async () => {
    try {
      const url = "/api/v1/city";
      const response = await api.get(url);
      const payload = [...response.data.data.cities];
      console.log(payload);
      setCities(payload || []);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchCities();
    fetchProducts();
  }, []);

  return (
    <>
      <Banner />
      <h1 className="text-center">Cities</h1>
      <div className="bg-primary text-white text-center grid grid-cols-5 gap-10 m-5 rounded p-3 ">
        {cities.map((item) => {
          return <span key={item.id}>{item.name}</span>;
        })}
      </div>
    
      <div className="grid grid-cols-4 gap-10 mt-5 m-5">
        {products.map((item) => (
          <ProductCard
            key={item?.id}
            productName={item?.name}
            productCategory={item?.category}
            productPrice={item?.price}
            onClick={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
