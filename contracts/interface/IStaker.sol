// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStaker {
    function vote(uint256 _pId) external payable returns(uint256, uint256);
    function unVote(uint256 _pId) external returns(uint256, uint256, uint256);
    function claimVote(uint256 _pId) external returns(uint256);
    function claimRewards(uint256 _pId) external returns(uint256);
}