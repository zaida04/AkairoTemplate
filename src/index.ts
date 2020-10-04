import Client from "./core/client/Client";
import { config } from "dotenv";
import { ClientOptions } from "./typings/ClientOptions";
import DBEnviroment from "../knexfile";
config();

if (!process.env.DEFAULTPREFIX) throw new Error("Must provide a prefix!");
if (!process.env.TOKEN) throw new Error("Must provide a token");

const options: ClientOptions = {
    dbEnv: DBEnviroment["development"],
    defaultPrefix: process.env.DEFAULTPREFIX,
};

const BotClient = new Client(options);
BotClient.login(process.env.TOKEN);
