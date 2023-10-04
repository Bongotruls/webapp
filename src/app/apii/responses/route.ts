import { NextResponse } from "next/server";
import { productFactory } from '@/components/products';


export function GET() {
  
  const products = productFactory(10);

 
  return NextResponse.json(
    { data: products  }, 
    { status: 200 } 
  );
}