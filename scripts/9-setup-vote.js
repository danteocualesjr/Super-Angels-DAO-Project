import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

// This is our governance smart contract
const voteModule = sdk.getVoteModule(
    "0x622533b911038B8AC349aB9fE0450cC492437D4C"
);

