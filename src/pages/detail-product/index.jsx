import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  const navigate =useNavigate();
  const fetchProducts = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = { ...response.data.data.product };
      console.log(payload);
      setProduct(payload || {});
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProducts(param.id);
  }, [param.id]);

  return (
    <>
     <Button type="primary" onClick={()=> navigate(`/detail-product/${onClick}`)}>DetailProduct</Button>
      <div>DetailProduct</div>
      <p>Nama Product  :{product?.name}</p>
      <p>Harga         :{product?.price}</p>
      <p>Kategori      :{product?.categoryId?.name}</p>
    </>
  );
};

export default DetailProduct;
