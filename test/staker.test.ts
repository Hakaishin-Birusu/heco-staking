import { ethers } from 'hardhat';
import { solidity } from 'ethereum-waffle';
import { expect, use } from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

use(solidity);


describe('Staker Flow', async () => {
    let user: SignerWithAddress;
    let master: SignerWithAddress;

    before(async () => {
        let signers = await ethers.getSigners();
        master = signers[0];
        user = signers[1];

        const NodeVoting = await ethers.getContractFactory('NodeVoting');
        const nodeVoting = NodeVoting.attach('0x80d1769ac6fee59BE5AAC1952a90270bbd2Ceb2F'); // mainnet attach

        const Staker = await ethers.getContractFactory("Staker");
        const staker = await Staker.deploy(master.address);
        const stakerContract = await staker.deployed()

        console.log(nodeVoting.address);
        console.log(stakerContract.address);
    });

    describe('Staker flow test', () => {
        it('Test deposit with zero amount', async () => {
            console.log("within it");
        });
    });
});
