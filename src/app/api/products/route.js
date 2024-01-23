import { ConnectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];

  try {
    await mongoose.connect(ConnectionStr);
    data = await Product.find();
  } catch (error) {
    data = { success: false };
  }
  return NextResponse.json({ result: data, success: true }, { status: "200" });
}

export async function POST(request) {
  let payload = await request.json();
  await mongoose.connect(ConnectionStr);

  let product = new Product(payload);

  const data = await product.save();

  return NextResponse.json({ success: true }, { status: "200" });
}
