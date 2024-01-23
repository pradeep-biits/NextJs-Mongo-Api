import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href="/productspage">
        <button>Add Users</button>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <Link href="/viewusers">
        <button>View Users</button>
      </Link>
    </div>
  );
};

export default page;
