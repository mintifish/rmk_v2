import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: handle email list subscription
  return NextResponse.json({ success: true });
}
