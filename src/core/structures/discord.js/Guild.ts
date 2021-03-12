import { Structures } from "discord.js";
import Client from "../../client/Client";

Structures.extend("Guild", (Guild) => {
    return class extends Guild {
        public constructor(client: Client, data: any) {
            super(client, data);
        }
    };
});
