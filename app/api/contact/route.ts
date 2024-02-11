import { sendMessage } from "@/helper/tg.bot";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await sendMessage(data);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.log(error);
    NextResponse.json({ error: error.message }, { status: 400 });
  }
}
