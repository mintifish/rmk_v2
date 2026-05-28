import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: handle donation form submission
  return NextResponse.json({ success: true });
}
