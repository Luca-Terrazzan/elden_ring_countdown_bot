import { DiscordService } from './src/discord.service';

const discord = new DiscordService();
console.log('Discord service is ready:', discord.isReady());
discord.
