// VotingSystem.sol
pragma solidity ^0.8.0;

contract VotingSystem {
    address public admin;
    mapping(address => bool) public voters;
    mapping(string => uint256) public votes;

    event VoteCasted(address indexed voter, string candidate);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addVoter(address _voter) external onlyAdmin {
        voters[_voter] = true;
    }

    function castVote(string memory _candidate) external {
        require(voters[msg.sender], "Only registered voters can cast votes");
        votes[_candidate]++;
        emit VoteCasted(msg.sender, _candidate);
    }
}