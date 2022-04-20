// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface INodeStaking {
    enum RevokingStatus { LOCKING, WITHDRAWED }
    struct UserInfo {
        uint256 amount; 
        uint256 rewardDebt;
    }
    struct RevokingInfo {
        uint256 amount;
        RevokingStatus status;
        uint256 lockingEndTime;
    }
    function vote(uint256 _pid) external payable;
    function revokeVote(uint256 _pid, uint256 _amount) external;
    function withdraw(uint256 _pid) external;
    function claimReward(uint256 _pid) external;
    function userInfo(uint256 _pid, address _user ) external returns(UserInfo memory);
    function revokingInfo(address _user, uint256 _pid ) external returns(RevokingInfo memory);
    function pendingReward(uint256 _pid, address _user) external view returns (uint256);

    enum StakingStage { INVALID, NOSTAKE, STAKED, LOCKING, WITHDRAWED }
    function isValidatorCandidate(address _validatorCandidate) external view returns (bool);
    function getValidatorCandidateStakingStatus(address _validatorCandidate) external view returns (bool, uint256, StakingStage, uint256, uint256, uint256);

}