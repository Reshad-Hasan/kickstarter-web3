const web3 = require("./web3");

const CampaignFactory = require("./build/CampaignFactory.json");

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x72e1eFb7925100aE95f4339caF0874b18Ff69d0E"
);

module.exports = instance;
