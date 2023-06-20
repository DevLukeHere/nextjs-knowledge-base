import { NextResponse } from "next/server";
import localData from "../../../json/data.json";

export async function GET(request: Request) {
  return NextResponse.json(localData);
}
