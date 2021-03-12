import Client from "./core/client/Client";
import { config } from "dotenv";
import { ClientOptions } from "./typings/ClientOptions";
config();

if (!process.env.DEFAULTPREFIX) throw new Error("Must provide a prefix!");
if (!process.env.TOKEN) throw new Error("Must provide a token");

const options: ClientOptions = {
    defaultPrefix: process.env.DEFAULTPREFIX,
};

const BotClient = new Client(options);
void BotClient.login(process.env.TOKEN);
