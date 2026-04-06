import { Bot } from "grammy";
import * as dotenv from "dotenv";
dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);

bot.command("start", (ctx) => {
  ctx.reply(
    `⚡ *QuantumBot активирован*\n\nДобро пожаловать, ${ctx.from?.first_name}!\n\nИспользуй /help чтобы увидеть команды.`,
    { parse_mode: "Markdown" }
  );
});

bot.command("help", (ctx) => {
  ctx.reply(
    `⚡ *QuantumBot — команды:*\n\n/start — запуск\n/help — помощь\n/ping — проверка связи`,
    { parse_mode: "Markdown" }
  );
});

bot.command("ping", (ctx) => {
  ctx.reply("🟢 Pong! QuantumBot онлайн.");
});

bot.on("message:text", (ctx) => {
  ctx.reply(`Ты написал: "${ctx.message.text}"`);
});

bot.start();
console.log("⚡ QuantumBot запущен!");