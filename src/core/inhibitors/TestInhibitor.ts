import { Command, Inhibitor } from "discord-akairo";
import { Message } from "discord.js";

export default class TestInhibitor extends Inhibitor {
    public constructor() {
        super("test-inhibitor", {
            reason: "You are not a test user!",
            type: "post",
            priority: 0,
        });
    }

    // eslint-disable-next-line @typescript-eslint/require-await
    public async exec(message: Message, command?: Command): Promise<boolean> {
        return false;
    }
}
