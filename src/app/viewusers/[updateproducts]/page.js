"use client";
import React, { useEffect, useState } from "react";

const Page = (props) => {
  let productId = props.params.updateproducts;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const UpdateMethod = async () => {
    const data = await fetch(
      "http://localhost:3000/api/products/" + productId,
      {
        method: "Put",
        body: JSON.stringify({ name, price, company, color, category }),
      }
    ).then((res) => res.json());

    if (data.success) {
      alert("Updated Successfully");
    }
  };

  useEffect(() => {
    GetProductsById();
  }, []);

  const GetProductsById = async () => {
    let data = await fetch(
      `http://localhost:3000/api/products/` + productId
    ).then((res) => res.json());
    setName(data.reslt.name);
    setPrice(data.reslt.price);
    setCompany(data.reslt.company);
    setColor(data.reslt.color);
    setCategory(data.reslt.category);
  };

  return (
    <>
      <div style={{ textAlign: "-webkit-center" }}>
        <h1>Update Product</h1>
        <div className="maincontainer">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="InputField"
            placeholder="Enter Name"
          />
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="InputField"
            placeholder="Enter price"
          />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="InputField"
            placeholder="Enter company"
          />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="InputField"
            placeholder="Enter color"
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="InputField"
            placeholder="Enter Category"
          />
          <input
            onClick={() => UpdateMethod()}
            className="InputField"
            type="button"
            value="Update Product"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
