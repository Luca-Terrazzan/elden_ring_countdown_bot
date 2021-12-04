import { Client, Intents } from 'discord.js';

export class DiscordService {
  private readonly client: Client;
  private readonly token = '';

  public constructor() {
    this.client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });
  }

  public isReady(): boolean {
    return this.client.isReady();
  }

  public login() {
    this.client.login(this.token);
  }

  public sendMessage() {
    // this.client.publi
  }
}
