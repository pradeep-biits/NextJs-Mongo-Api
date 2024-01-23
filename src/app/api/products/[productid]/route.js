import { ConnectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const _id = content.params.productid;
  const filter = { _id };
  let payload = await request.json();

  await mongoose.connect(ConnectionStr);
  const result = await Product.findOneAndUpdate(filter, payload);

  return NextResponse.json({ result, success: true });
}
export async function GET(request, content) {
  const ProductId = content.params.productid;
  const record = { _id: ProductId };
  await mongoose.connect(ConnectionStr);
  const data = await Product.findById(record);

  return NextResponse.json({ reslt: data, success: true });
}

export async function DELETE(request, content) {
  const ProductId = content.params.productid;
  const deleterecord = { _id: ProductId };
  await mongoose.connect(ConnectionStr);
  const data = await Product.findByIdAndDelete(deleterecord);

  return NextResponse.json({
    result: "Data Deleted Successfully",
    success: true,
  });
}
