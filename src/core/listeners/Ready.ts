import { Listener } from "discord-akairo";

export default class Ready extends Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
        });
    }

    exec() {
        this.client.Logger.log(`Bot logged in as ${this.client.user!.tag}`);
    }
}
