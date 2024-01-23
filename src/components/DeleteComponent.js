"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteComponent = (params) => {
  console.log(params.id);
  const route = useRouter();

  const deletemethod = async () => {
    let data = await fetch("http://localhost:3000/api/products/" + params.id, {
      method: "DELETE",
    }).then((res) => res.json());

    if (data.success) {
      alert("Data Deleted Successfully");
      route.refresh();
    }
  };

  return <div onClick={deletemethod}>Delete</div>;
};

export default DeleteComponent;
