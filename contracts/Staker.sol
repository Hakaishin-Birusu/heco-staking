//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import {IStaker} from "./interface/IStaker.sol";
import {INodeStaking} from "./interface/INodeStaking.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Staker is IStaker, Ownable {
    // testnet
    address public constant nodeVoting =
        0xD924393A93Ee62c7b7e515e65270756f569fa9bF;

    // mainnet
    // address public constant nodeVoting = 0x80d1769ac6fee59BE5AAC1952a90270bbd2Ceb2F;

    address public master;

    constructor(address _master) {
        master = _master;
    }

    modifier onlyMaster() {
        require(msg.sender == master, "ERR: AUTH FAILED");
        _;
    }

    function vote(uint256 _pId)
        external
        payable
        override
        onlyMaster
        returns (uint256, uint256)
    {
        INodeStaking(nodeVoting).vote{value: msg.value}(_pId);
        INodeStaking.UserInfo memory uInfo = INodeStaking(nodeVoting).userInfo(
            _pId,
            address(this)
        );
        uint256 rewardReceived = _checkAndSendReward();
        // returns total Staked amount & reward sen to master
        return (uInfo.amount, rewardReceived);
    }

    function unVote(uint256 _pId)
        external
        override
        onlyMaster
        returns (
            uint256,
            uint256,
            uint256
        )
    {
        INodeStaking.UserInfo memory uInfo = INodeStaking(nodeVoting).userInfo(
            _pId,
            address(this)
        );
        INodeStaking(nodeVoting).revokeVote(_pId, uInfo.amount);
        INodeStaking.RevokingInfo memory rInfo = INodeStaking(nodeVoting)
            .revokingInfo(address(this), _pId);
        uint256 rewardReceived = _checkAndSendReward();
        // returns total unStaked amount & lock end time & reward sent to master
        return (rInfo.amount, rInfo.lockingEndTime, rewardReceived);
    }

    function claimVote(uint256 _pId)
        external
        override
        onlyMaster
        returns (uint256)
    {
        INodeStaking(nodeVoting).withdraw(_pId);
        uint256 totalTransferred = _checkAndSendReward();
        return (totalTransferred);
    }

    function claimRewards(uint256 _pId) external override returns (uint256) {
        uint256 rewardAmount = INodeStaking(nodeVoting).pendingReward(
            _pId,
            address(this)
        );
        if (rewardAmount > 0) {
            INodeStaking(nodeVoting).claimReward(_pId);
            uint256 rewardReceived = _checkAndSendReward();
            return rewardReceived;
        }
        return 0;
    }

    function _checkAndSendReward() internal returns (uint256) {
        uint256 contractBalance = address(this).balance;
        if (contractBalance > 0) {
            (bool sent, ) = payable(master).call{value: contractBalance}("");
            require(sent, "ERR: TRANSFER FAILED");
        }
        return contractBalance;
    }
}
