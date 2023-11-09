const React = require("react");
const factory = require("../ethereum/factory");
const { Component } = require("react");

class CampaignIndex extends Component {
  static async getInitialProps() {
    console.log("here");
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);

    return { campaigns };
  }

  render() {
    return <div>test</div>;
  }
}

export default CampaignIndex;
