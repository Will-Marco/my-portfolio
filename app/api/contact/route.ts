import { FormType } from "@/types";
import { NextResponse } from "next/server";
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req: Request) {
  const token = process.env.MY_TELEGRAM_TOKEN as string;
  const chatId = process.env.MY_CHAT_ID as string;

  const bot = new TelegramBot(token, { polling: true });

  try {
    const data: FormType = await req.json();

    const text = `
      New message from your website:
      Name: ${data.name}
      Contact Information: ${data.contactInformation}
      Subject: ${data.subject}
      Message: ${data.message}
    `;

    await bot.sendMessage(chatId, text);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.log(error);
    NextResponse.json({ error: error.message }, { status: 400 });
  }
}
