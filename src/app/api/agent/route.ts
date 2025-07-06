// src/app/api/agent/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Received agent callback:", body);

  // Store or handle callback
  return NextResponse.json({ status: "ok" });
}
