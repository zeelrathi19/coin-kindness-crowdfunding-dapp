require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: './.env.local' });

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [privateKey],
    },
  },
  tasks: {
    accounts: {
      task: async () => {
        const accounts = await ethers.getSigners();

        for (const account of accounts) {
          console.log(account.address);
        }
      },
    },
  },
};
