const config = require("./config.json");
const RPC = require("discord-rpc");
const client = new RPC.Client({
  transport: "ipc",
});

// show the elapsed time
const startTime = Date.now();
setInterval(() => {
  startTime;
}, 500);

// updateActivity Function
const updateActivity = () => {
  if (!client) return;
  client.setActivity({
    details: config.details,
    startTimestamp: startTime,
    largeImageKey: config.largeImage,
    state: config.state,
    largeImageText: config.largeImageText,
    smallImageKey: config.smallImage,
    smallImageText: config.smallImageText,
    buttons: [
      {
        label: config.buttons.buttonOneLabel,
        url: config.buttons.buttonOneUrl,
      },
      {
        label: config.buttons.buttonTwoLabel,
        url: config.buttons.buttonTwoUrl,
      },
    ],
    /* you can't visit the website that you put in your own button
     * but don't worry the other ppl can !
     */
  });
};

client.on("ready", () => {
  console.log(
    `Done, see you're profile.\nLogged in as ${client.user.username} .`
  );
  updateActivity();
  // update the activity automatically
  setInterval(() => {
    updateActivity();
  }, 500);
});

client.login({ clientId: config.clientId }).catch(console.error);
