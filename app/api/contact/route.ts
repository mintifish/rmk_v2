import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: handle contact form submission
  return NextResponse.json({ success: true });
}
