const { Web3 } = require("web3");

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/86a50688eda84d23b1e97a850b1c6092"
  );
  web3 = new Web3(provider);
}

module.exports = web3;
