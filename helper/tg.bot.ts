import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import { FormType } from "@/types";

dotenv.config();

export async function sendMessage(data: FormType) {
  const token = process.env.MY_TELEGRAM_TOKEN as string;
  const chatId = process.env.MY_CHAT_ID as string;

  const bot = new TelegramBot(token, { polling: true });

  const message = `
  New message from your website:
Name: ${data.name}

Contact Information: ${data.contactInformation}

Subject: ${data.subject}

Message: ${data.message}
`;

  await bot.sendMessage(chatId, message);
}
