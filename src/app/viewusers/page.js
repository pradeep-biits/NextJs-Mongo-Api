import DeleteComponent from "@/components/DeleteComponent";
import Link from "next/link";
import React from "react";

export async function GetAllUsers() {
  const data = await fetch("http://localhost:3000/api/products").then((res) =>
    res.json()
  );
  return data.result;
}

const Page = async () => {
  const data = await GetAllUsers();
  console.log(data);
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>company</th>
            <th>color</th>
            <th>category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.company}</td>
              <td>{item.color}</td>
              <td>{item.category}</td>
              <td>
                <Link href={"/viewusers/" + item._id}>
                  <button>Edit</button>
                </Link>
              </td>
              <td>
                <button>
                  <DeleteComponent id={item._id} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
