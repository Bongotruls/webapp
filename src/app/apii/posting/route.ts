import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    const data = await req.json() as { data: String };
    console.log(data)

    return NextResponse.json(data.data , {status: 200})

}