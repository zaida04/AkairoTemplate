import { Structures } from "discord.js";
import Client from "../../client/Client";
import SettingsManager from "../../managers/SettingsManager";

Structures.extend("Guild", (Guild) => {
    return class extends Guild {
        settings: SettingsManager;
        constructor(client: Client, data: any) {
            super(client, data);
            this.settings = new SettingsManager(this, client.db);
        }
    };
});
