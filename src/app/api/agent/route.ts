import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  console.log("Received ping from agent:", body);

  return NextResponse.json({
    success: true,
    received: body,
  });
}