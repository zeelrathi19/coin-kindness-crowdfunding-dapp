# Coin Kindness – Crowdfunding DApp

"Coin Kindness" is a decentralized crowdfunding application (DApp) built using Ethereum smart contracts and deployed on the Polygon network. This platform enables users to create campaigns and receive donations with full transparency using blockchain technology.

---

## Abstract

Coin Kindness leverages blockchain's decentralized nature to ensure secure, low-risk crowdfunding. By utilizing smart contracts and IPFS, it enables global accessibility, trustless transactions, and a transparent environment for both campaign creators and donors.

---

## Features

- Create and deploy crowdfunding campaigns
- Donate to campaigns using MetaMask
- View all campaigns or filter by category (Education, Health, Animals)
- Transparent donation history with timestamps and donor addresses
- Campaign images and stories stored on IPFS
- Campaign data is immutable and trustless

---

## Screenshots

| Campaign Cards | Campaign Details | Dashboard View |
|----------------|------------------|----------------|
| ![campaigns](screenshot1.png) | ![details](screenshot2.png) | ![dashboard](screenshot3.png) |

---

## Tech Stack

- Frontend: Next.js, Styled-Components, Material UI
- Smart Contracts: Solidity (via Hardhat)
- Blockchain Interaction: Ethers.js, MetaMask
- Storage: IPFS (via `ipfs-http-client`)
- Network: Polygon Testnet (Mumbai)
- Deployment: Hardhat, Infura

---

## Setup Instructions

1. Clone the Repository
git clone https://github.com/yourusername/coin-kindness-crowdfunding-dapp.git
cd coin-kindness-crowdfunding-dapp

2. Install Dependencies

npm install

3. Set Up Environment Variables
Create a .env.local file in the root with:
env 

NEXT_PUBLIC_ADDRESS=0xYourDeployedFactoryContract
NEXT_PUBLIC_RPC_URL=https://polygon-mumbai.infura.io/v3/your-project-id

4. Compile Contracts

npx hardhat compile

5. Deploy to Polygon Mumbai Testnet

npx hardhat run scripts/deploy.js --network polygon

6. Start the Development Server

npm run dev
Visit http://localhost:3000

Keywords
Crowd Fund, Blockchain, Ethereum Virtual Machine, Consensus, MetaMask, DApp, IPFS, Smart Contracts

-> Functional Pages
Campaigns Page

Lists all campaigns

Filter campaigns by category

View campaign details and donation history

➕ Create Campaign Page
Create a campaign with:

Title

Description

Image (IPFS)

Required amount

Category

Automatically uploads content to IPFS and deploys a new campaign contract

-> Dashboard Page
Displays campaigns created by the connected wallet address

-> Future Scope
DAO-based voting for campaign approval


Acknowledgments

Ethereum & Solidity Documentation

Polygon Mumbai Testnet

IPFS & Infura

Hardhat for contract development

MUI and Styled Components for UI


