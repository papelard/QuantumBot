import { Bot } from "grammy";
import * as dotenv from "dotenv";
dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);

let isActive = true;

bot.command("start", (ctx) => {
  isActive = true;
  ctx.reply(
    `⚡ *QuantumBot активирован*\n\nДобро пожаловать, ${ctx.from?.first_name}!\n\nИспользуй /help чтобы увидеть команды.`,
    { parse_mode: "Markdown" }
  );
});

bot.command("stop", (ctx) => {
  isActive = false;
  ctx.reply("🔴 QuantumBot остановлен. Напиши /start чтобы запустить снова.");
});

bot.command("help", (ctx) => {
  ctx.reply(
    `⚡ *QuantumBot — команды:*\n\n/start — запуск\n/stop — остановить\n/help — помощь\n/ping — проверка связи`,
    { parse_mode: "Markdown" }
  );
});

bot.command("ping", (ctx) => {
  if (!isActive) return;
  ctx.reply("🟢 Pong! QuantumBot онлайн.");
});

bot.start();
console.log("⚡ QuantumBot запущен!");