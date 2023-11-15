import { SlashCommandBuilder, REST, Routes, Client, Events, GatewayIntentBits, Collection, ActivityType, User, TextChannel } from "discord.js"
import "dotenv/config"
import { green, reset, yellow } from "kleur"
import mongoose from "mongoose";

const TOKEN = process.env.TOKEN
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages] })

mongoose.connect(process.env.MONGODB_URI!!, { // @ts-ignore 
  autoIndex: false,
  family: 4 
})

client.once(Events.ClientReady, async c => {
  let commands = [

  ]
  console.log(green("✓"), reset(`Ready! Successfully logged in as ${c.user.tag}!`));
  c.user.setActivity('pet kitty, get rewar ds', { type: ActivityType.Custom })
  console.log(yellow("..."), reset("Attempting to send slash commands to Discord..."));
  try {
    const data = await rest.put(
			Routes.applicationGuildCommands('1174361852625567744', '1174362800471167039'),
			{ body: commands },
		); // @ts-ignore
    console.log(green("✓"), reset(`Successfully reloaded ${data.length} application (/) commands.`));
  } catch (error) {
    console.error(error)
  }
})


const rest = new REST()
rest.setToken(TOKEN);

client.login(TOKEN)
