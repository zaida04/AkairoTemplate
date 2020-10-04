import { Guild } from "discord.js";
import DatabaseManager from "../../database/DatabaseManager";

export default class SettingsManager {
    guild: Guild;
    db: DatabaseManager;
    constructor(guild: Guild, db: DatabaseManager) {
        this.guild = guild;
        this.db = db;
    }
    get baseGuildSettings() {
        return this.db.api("settings").where("guild_id", this.guild.id);
    }

    async get(key: string): Promise<string | null> {
        return key
            ? await this.baseGuildSettings
                  .select(key)
                  .first()
                  .then((x) => (x && x[key] ? x[key] : null))
            : null;
    }
}
